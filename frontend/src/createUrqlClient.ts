import { makeOperation } from "@urql/core";
import { authExchange } from "@urql/exchange-auth";
import { cacheExchange, createClient, dedupExchange, fetchExchange } from "urql";
import "./App.css";
import { UserContext } from "./contexts/UserContext";

const getAuth = (props: Pick<UserContext, "token" | "logout">) => async ({ authState }) => {
  if (!authState) {
    const { token } = props;
    if (token) {
      return { token };
    }
    return null;
  }

  props.logout();

  return null;
};

const addAuthToOperation = ({ authState, operation }) => {
  if (!authState || !authState.token) {
    return operation;
  }

  const fetchOptions = typeof operation.context.fetchOptions === "function" ? operation.context.fetchOptions() : operation.context.fetchOptions || {};

  return makeOperation(operation.kind, operation, {
    ...operation.context,
    fetchOptions: {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        Authorization: `Bearer ${authState.token}`,
      },
    },
  });
};

const didAuthError = ({ error }) => {
  return error.graphQLErrors.some((e) => e.extensions?.code === "validation-failed");
};

const willAuthError = ({ authState }) => {
  const jwtExpired = false;
  if (!authState || jwtExpired) return true;
  return false;
};

export const createUrqlClient = (props: Pick<UserContext, "token" | "logout">) =>
  createClient({
    url: "http://localhost:8080/v1/graphql",
    exchanges: [
      dedupExchange,
      cacheExchange,
      authExchange({
        getAuth: getAuth(props),
        addAuthToOperation,
        didAuthError,
        willAuthError,
      }),
      fetchExchange,
    ],
  });
