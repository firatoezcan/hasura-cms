/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from "react";
import { parseJwt } from "../helpers/functions";

const defaultClaims = {
  "https://hasura.io/jwt/claims": {
    "X-Hasura-User-Id": undefined,
    "X-Hasura-Default-Role": undefined,
  },
};

export type UserContext = {
  logout: () => void;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  claims: typeof defaultClaims;
  userId: string | undefined;
};

export const UserContext = createContext<UserContext | null>(null);

const UserContextProvider = (props) => {
  const { children } = props;
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [claims, setClaims] = useState(defaultClaims);
  const [userId, setUserId] = useState<string>();

  useEffect(() => {
    if (!token) {
      localStorage.removeItem("token");
      setClaims(defaultClaims);
      setUserId(undefined);
      return;
    }
    const parsed = parseJwt(token);
    const userId = parsed["https://hasura.io/jwt/claims"]["X-Hasura-User-Id"];
    localStorage.setItem("token", token);
    setClaims(parsed);
    setUserId(userId);
  }, [token]);

  const logout = () => {
    setToken(null);
  };

  return (
    <UserContext.Provider
      value={{
        logout,
        token,
        setToken,
        claims,
        userId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export const withUserContext = (App: () => JSX.Element | null) => () => {
  App["displayName"] = `withUserContext(${App.name}`;
  return (
    <UserContextProvider>
      <App />
    </UserContextProvider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("UserContext must be used with UserContextProvider!");
  return context;
};
