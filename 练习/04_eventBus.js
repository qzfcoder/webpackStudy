// class eventBus {
//   constructor() {
//     this.eventBus = {};
//   }
//   on(evnetName, eventCallback, thisArg) {
//     let handlers = this.eventBus[evnetName];
//     if (!handlers) {
//       handlers = [];
//       this.eventBus[evnetName] = handlers;
//     }
//     handlers.push({ eventCallback, thisArg });
//   }
//   off(evnetName, eventCallback) {
//     const handlers = this.eventBus[evnetName];
//     if (!handlers) return;
//     const newHandlers = [...handlers];
//     for (let i = 0; i < newHandlers.length; i++) {
//       const handler = newHandlers[i];
//       if (handler.eventCallback === eventCallback) {
//         const index = handlers.indexOf(handler);
//         handlers.splice(index, 1);
//       }
//     }
//   }
//   emit(evnetName, ...payload) {
//     const handlers = this.eventBus[evnetName];
//     if (!handlers) return;
//     handlers.forEach((handler) => handler.apply(handlers.thisArg, payload));
//   }
// }

class eventBus {
  constructor() {
    this.eventBus = {};
  }
  on(evnetName, eventCallback, thisArg) {
    const handlers = this.eventBus[evnetName];
    if (!handlers) {
      handlers = [];
      this.eventBus[evnetName] = handlers;
    }
    handlers.push({ eventCallback, thisArg });
  }
  off(evnetName, eventCallback) {
    const handlers = this.eventBus[evnetName];
    if (!handlers) {
      return;
    }
    const newHandlers = [...handlers];
    for (let i = 0; i < newHandlers.length; i++) {
      const handler = newHandlers[i];
      if (handler.eventCallback === eventCallback) {
        const index = newHandlers.indexof(handler);
        handlers.splice(index, 1);
      }
    }
  }
  emit(evnetName, ...payload) {
    const handlers = this.eventBus[evnetName];
    if (!handlers) {
      return;
    }
    handlers.forEach((handler) => handler.apply(handlers.thisArg, payload));
  }
}
