function throttle(fn, intrval, options = { leading: true, trailing: false }) {
  let { leading, trailing } = options;
  let lastTime = 0;
  let timers;
  return function (...args) {
    let nowtime = new Date().getTime();
    if (!leading && lastTime == 0) {
      lastTime = nowtime;
    }
    let remainTime = intrval - (nowtime - lastTime);
    if (remainTime <= 0) {
      timers = null;
      clearTimeout(timer);
      fn.apply(this, args);
    }
    if (!trailing && !timers) {
      clearTimeout(timer);
      let lastTime = !leading ? 0 : new Date().getTime();
      timers = setTimeout(() => {
        fn.apply(this, args);
      }, lastTime);
    }
  };
}
