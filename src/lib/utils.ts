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
