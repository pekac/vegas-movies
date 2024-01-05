export interface IDb {
  query: string;
  tags?: string[];
  variables?: any;
}

export async function db({
  query = "",
  tags = [],
  variables = {},
}: IDb): Promise<any> {
  try {
    const api = process.env.NEXT_PUBLIC_API_URI as string;
    const res = await fetch(api, {
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
    const { data } = await res.json();
    return data;
  } catch (e) {}
}
