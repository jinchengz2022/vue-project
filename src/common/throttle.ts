export const throttle = <T extends unknown[], K>(fn: (...args: T) => K, delay: number = 2000) => {
  let timer = null;

  return function(...args: T) {
    if(timer) {
      return;
    } else {
      fn(...args);
      timer = setTimeout(() => {
        timer = undefined;
      }, delay);
    }
  }
}