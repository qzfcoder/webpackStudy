import "./style/index.less";

class Food {
  element: HTMLElement;
  constructor() {
    // 获取页面中food元素
    this.element = document.getElementById("food")!;
  }
  // 获取食物x轴坐标
  get X() {
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetTop;
  }
  // 修改食物位置的方法
  change() {
    // 生成随机的位置

    let x = Math.round(Math.random() * 29) * 10;
    let y = Math.round(Math.random() * 29) * 10;
    this.element.style.left = x + "px";
    this.element.style.top = y + "px";
  }
}
