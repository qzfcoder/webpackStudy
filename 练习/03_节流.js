function throttle(fn, intrval, options = { leading: true, trailing: false }) {
  let { leading, trailing } = options;
  let timer;
  let lastTime = 0;
  return function (...args) {
    let nowTime = new Date().getTime();
    if (!leading && lastTime == 0) lastTime = nowTime;
    let remainTime = intrval - (nowTime - lastTime);
    if (remainTime <= 0) {
      clearTimeout(timer);
      fn.apply(this, args);
      timer = null;
    }
    if (trailing && !timer) {
      timer = setTimeout(() => {
        clearTimeout(timer);
        lastime = !leading ? 0 : new Date().getTime();
        fn.apply(this, args);
      }, remainTime);
    }
  };
}
