class eventBus {
  constructor() {
    this.eventBus = {};
  }
  on(eventName, evnetCallback, thisArg) {
    const handlers = this.eventBus[eventName];
    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }
    handlers.push({ evnetCallback, thisArg });
  }
  off(eventName, evnetCallback) {
    const handlers = this.eventBus[eventName];
    if (!handlers) {
      return;
    }
    const newHandlers = [...handlers];
    for (let i = 0; i < newHandlers.length; i++) {
      const ahandler = newHandlers[i];
      if (ahandler.eventCallback === eventCallback) {
        const index = newHandlers.indexof(ahandler);
        handlers.splice(index, 1);
      }
    }
  }
  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName];
    if (!handlers) {
      return;
    }
    handlers.forEach((handler) =>
      handler.evnetCallback(handlers.thisArg, ...payload)
    );
  }
}
