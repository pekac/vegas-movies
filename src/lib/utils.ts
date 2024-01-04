import { ReadonlyURLSearchParams } from "next/navigation";

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export function debounce(fn: Function, interval: number): any {
  let timeout: any = null;

  return function (...args: any[]) {
    const context = this;
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      timeout = null;
      fn.apply(context, args);
    }, interval);
  };
}
