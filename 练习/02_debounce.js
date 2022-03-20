function debounce(fn, delay, immediate = true) {
  let timer;
  let isFlag = false;
  return function (...args) {
    clearTimeout(timer);
    if (immediate && !isFlag) {
      fn.apply(this, args);
      isFlag = true;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      isFlag = false;
    }, delay);
  };
}
