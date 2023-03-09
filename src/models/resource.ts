export interface IOptions {
  cache?: RequestCache;
  next?: {
    revalidate: number;
  };
}
