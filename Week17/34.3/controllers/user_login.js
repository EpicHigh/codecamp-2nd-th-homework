const loginQuery = require("../db/query/user_login");

module.exports = ctx => {
  const {
    request: {
      body: { email }
    }
  } = ctx;
  const {
    request: {
      body: { password }
    }
  } = ctx;
  return loginQuery.checkUser(email, password);
};
