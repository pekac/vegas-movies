export function findItemIndexInList(list: any[], item: any) {
  return list.findIndex((i) => i.id === item.id);
}

export function debounce(fn: Function, interval: number) {
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
