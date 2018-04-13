const memoryCache = {};

module.exports = {
  getFoo (key) {
    // const app = this;
    if (!memoryCache.hasOwnProperty(key)) {
      memoryCache[key] = 1 + 2;
    }
    return memoryCache[key];
  }
};
