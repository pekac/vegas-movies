export const ROUTES: IRoute[] = [
  {
    name: "favorites",
    path: "/favorites",
  },
  {
    name: "watchlist",
    path: "/watchlist",
  },
];

export interface IRoute {
  name: string;
  path: string;
}
