import { GraphQLClient } from "graphql-request";

export { gql } from "graphql-request";

export const db = new GraphQLClient(process.env.NEXT_PUBLIC_API_URI as string, {
  // @ts-ignore
  headers: {
    "cache-control": "no-store",
    "content-type": "application/json",
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_API_KEY,
  },
});
