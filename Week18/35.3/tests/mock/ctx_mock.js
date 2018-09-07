module.exports = {
  user(username, password, email) {
    return {
      request: { body: { username, password, email } },
      async render(somePage, dataSend) {}
    };
  },
  next() {
    return true;
  }
};
