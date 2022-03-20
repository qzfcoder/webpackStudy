let status_pending = "pending";
let status_resolved = "resolved";
let status_rejected = "rejected";

class myPromise {
  constructor(executor) {
    this.status = status_pending;
    this.value;
    this.reason;
    this.onfulfilledFns = [];
    this.onrejectedFns = [];
    const resolve = (value) => {
      if (this.status === status_pending) {
        queueMicrotask(() => {
          this.status = status_resolved;
          this.value = value;
          this.onfulfilledFns.forEach((fn) => fn());
        });
      }
    };
    const reject = (reason) => {
      if (this.status === status_pending) {
        this.status = status_rejected;
        this.reason = reason;
        this.onrejectedFns.forEach((fn) => fn());
      }
    };
    executor(resolve, reject);
  }
  then(onfulfilled, onrejected) {
    return new myPromise((resolve, reject) => {
      if (this.status === status_pending) {
        this.onfulfilledFns.push(() => {
          const result = onfulfilled(this.value);
          try {
            resolve(result);
          } catch {
            reject(result);
          }
        });
        this.onrejectedFns.push(() => {
          const result = onrejected(this.reason);
          try {
            resolve(result);
          } catch {
            reject(result);
          }
        });
      }
      if (this.status === status_rejected) {
        const result = onrejected(this.reason);
        try {
          resolve(result);
        } catch {
          reject(result);
        }
      }
      if (this.status === status_resolved) {
        const result = onfulfilled(this.value);
        try {
          resolve(result);
        } catch {
          reject(result);
        }
      }
    });
  }
  static resolve(value) {
    return new HYPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new HYPromise((resolve, reject) => reject(reason));
  }
  static catch(err) {
    this.then(undefined, err);
  }
  static finally(done) {
    this.then(
      () => {
        done();
      },
      () => {
        done();
      }
    );
  }
  static all(promises) {
    return new myPromise((resolve, reject) => {
      let result = [];
      promises.forEach((item) => {
        item.then(
          (res) => {
            result.push(res);
            if (result.length === promises.length) {
              resolve(result);
            }
          },
          (err) => reject(err)
        );
      });
    });
  }
  static allSettled(promises) {
    return new myPromise((resolve, reject) => {
      let result = [];
      promises.forEach((item) => {
        item.then(
          (res) => {
            result.push({ status: "success", value: res });
            if (result.length === promises.length) {
              resolve(result);
            }
          },
          (err) => {
            result.push({ status: "err", value: err });
            if (result.length === promises.length) {
              resolve(result);
            }
          }
        );
      });
    });
  }
}

let asd = new myPromise((resolve, reject) => {
  resolve("123");
});
asd
  .then(
    (res) => {
      console.log(res);
      return "111";
    },
    (err) => {
      console.log(err);
    }
  )
  .then((res) => {
    console.log(res);
  });
