import { GraphQLClient } from "graphql-request";
import { getSdk as Mutations } from "generated/mutations";
import { getSdk as Queries } from "generated/queries";

if (!process.env.HASURA_ADMIN_SECRET) throw new Error(`You need to set the admin secret to access Hasura via the environment variable "HASURA_ADMIN_SECRET"`);

const client = new GraphQLClient("http://localhost:8080/v1/graphql", {
  headers: {
    "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET,
  },
});

export const hasuraGraphql = { ...Mutations(client), ...Queries(client) };
