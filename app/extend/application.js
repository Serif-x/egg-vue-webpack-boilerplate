const cache = {};

module.exports = {
  getFoo (key) {
    // const app = this;
    if (!cache.hasOwnProperty(key)) {
      cache[key] = 1 + 2;
    }
    return cache[key];
  }
};
