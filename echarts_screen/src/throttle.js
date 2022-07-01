// 节流函数，处理setRemUnit
export function throttle(
  fn,
  interval,
  options = { leading: false, trailing: true }
) {
  let { leading, trailing } = options;
  let lastTime = 0;
  let timer = null;
  return function (...args) {
    let nowTime = new Date().getTime();
    if (lastTime == 0 && !leading) {
      lastTime = nowTime;
    }
    let remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      clearTimeout(timer);
      timer = null;
      fn.apply(this, args);
      lastTime = nowTime;
      return;
    }
    if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null;
        lastTime = !leading ? 0 : new Date().getTime();
        fn.apply(this, args);
      }, remainTime);
    }
  };
}
