import React, { FC, useEffect, useMemo } from "react";
import { Provider } from "urql";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useUserContext, withUserContext } from "./contexts/UserContext";
import { createUrqlClient } from "./createUrqlClient";
import { useLoginMutation, useRegisterMutation } from "./generated/mutations";
import { useMeQuery, useTestMeQuery, useTestProjectsQuery } from "./generated/queries";

const CreateAndLoginUser = () => {
  const { token, setToken, claims } = useUserContext();
  const [registerData, register] = useRegisterMutation();
  const [testProject] = useTestProjectsQuery();
  const [testMe] = useTestMeQuery();

  const [loginData, login] = useLoginMutation();
  useEffect(() => {
    if (!loginData.data || loginData.fetching) return;
    const token = loginData.data?.login?.token;
    if (!token) {
      console.error("Login failed");
      return;
    }
    setToken(token);
  }, [loginData]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 space-y-4">
        <Input label="Current token" value={token || ""} readOnly />
        <Button
          type="button"
          onClick={() =>
            setToken(
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IlgtSGFzdXJhLURlZmF1bHQtUm9sZSI6InVzZXIiLCJ4LUhhc3VyYS1BbGxvd2VkLVJvbGVzIjpbInVzZXIiXSwiWC1IYXN1cmEtVXNlci1JZCI6IjZmODgzOTE1LWRkZTAtNDBiNi05ZTFlLWNkMTZhYmZhZGRkNyIsIlgtSGFzdXJhLUp3dC1WZXJzaW9uIjoiMSJ9LCJleHBpcmVzSW4iOjEyMDk2MDAwMDAsImlzcyI6ImZpcmF0LWxvbCIsImlhdCI6MTYxNjk0MDM1MH0.Wcb1FTy4kVd-SSibI7tx7tbOnM77QpQJqMf1zdWfd2M"
            )
          }
        >
          Change to user 6f883915-dde0-40b6-9e1e-cd16abfaddd7
        </Button>
        <Button
          type="button"
          onClick={() =>
            setToken(
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IlgtSGFzdXJhLURlZmF1bHQtUm9sZSI6InVzZXIiLCJ4LUhhc3VyYS1BbGxvd2VkLVJvbGVzIjpbInVzZXIiXSwiWC1IYXN1cmEtVXNlci1JZCI6ImUxYmE1ODE0LTcyYmEtNGJiYy1hMjA0LThmOTk0ZGIyY2Y5YiIsIlgtSGFzdXJhLUp3dC1WZXJzaW9uIjoiMSJ9LCJleHBpcmVzSW4iOjEyMDk2MDAwMDAsImlzcyI6ImZpcmF0LWxvbCIsImlhdCI6MTYxNjk0MzY3OH0.peFmu1UVxZEQlqbLJ4HP1Ck2JXsVWheu3YXpCSMYl-c"
            )
          }
        >
          Change to user e1ba5814-72ba-4bbc-a204-8f994db2cf9b
        </Button>
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const res = await register(Object.fromEntries(data) as any);
          const id = res.data?.register?.id;
          if (!id) return;
          login({ id });
        }}
      >
        <div className="flex flex-wrap mb-4 -mx-2">
          <div className="w-1/2 px-2">
            <Input label="First Name" name="firstName" value="Firat" readOnly />
          </div>
          <div className="w-1/2 px-2">
            <Input label="Last Name" name="lastName" value="Özcan" readOnly />
          </div>
          <div className="w-1/2 px-2">
            <Input label="Email" name="email" value={`firat+${Date.now()}@example.com`} readOnly />
          </div>
        </div>
        <Button type="submit">Create new user</Button>
      </form>
      <div className="text-xs">
        <pre className="text-green-700">{JSON.stringify(claims, null, 2)}</pre>
        <pre className="text-red-700">{JSON.stringify(testProject.data, null, 2)}</pre>
        <pre className="text-blue-700">{JSON.stringify(testMe.data, null, 2)}</pre>
        <pre className="text-yellow-700">{JSON.stringify(registerData.data, null, 2)}</pre>
      </div>
    </div>
  );
};

const AuthBarrier: FC = ({ children }) => {
  const { token, logout, claims } = useUserContext();
  const [{ data }] = useMeQuery();
  useEffect(() => {
    if (!data) return;
    if (data.me.length === 0) logout();
  }, [data]);
  return <>{children}</>;
};

function App() {
  const { token, logout, claims } = useUserContext();
  const client = useMemo(() => {
    const isLoggedIn = Boolean(token);
    if (isLoggedIn === null) {
      return null;
    }

    return createUrqlClient({ token, logout });
  }, [token]);

  if (!client) {
    return null;
  }

  return (
    <Provider value={client}>
      <AuthBarrier key={token}>
        <CreateAndLoginUser />
      </AuthBarrier>
    </Provider>
  );
}

export default withUserContext(App);
