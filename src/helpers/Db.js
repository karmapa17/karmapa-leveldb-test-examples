import levelup from 'levelup';

export default class Db {

  constructor(path) {
    this.db = levelup(path);
  }

  get(key) {
    return new Promise((resolve, reject) => {
      this.db.get(key, (err, value) => {
        err ? reject(err) : resolve(value);
      });
    });
  }

  put(key, value) {
    return new Promise((resolve, reject) => {
      this.db.put(key, value, (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  del(key) {
    return new Promise((resolve, reject) => {
      this.db.del(key, (err) => {
        err ? reject(err) : resolve();
      });
    });
  }
}
