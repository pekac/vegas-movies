export interface IDb {
  query: string;
  tags?: string[];
  variables?: any;
}

export function db({ query = "", tags = [], variables = {} }: IDb) {
  const api = process.env.NEXT_PUBLIC_API_URI as string;
  return fetch(api, {
    method: "POST",
    // @ts-ignore
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": process.env.API_KEY,
    },
    next: { tags },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
}
