import { GraphQLClient } from "graphql-request";

export { gql } from "graphql-request";

export const db = new GraphQLClient(process.env.NEXT_PUBLIC_API_URI as string, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});
