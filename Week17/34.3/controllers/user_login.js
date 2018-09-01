const loginQuery = require("../db/query/user_login");

module.exports = ({
  request: {
    body: { email, password }
  }
}) => {
  return loginQuery.checkUser(email, password);
};
