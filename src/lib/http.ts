import { BASE_URL, API_KEY } from "@constants/api";

export function buildQuery(uri: string, params: {} = {}) {
  const temp = new URLSearchParams(params).toString();
  const queryParams = temp.length > 0 ? `&${temp}` : "";
  return `${BASE_URL}${uri}?api_key=${API_KEY}&language=en-US${queryParams}`;
}
