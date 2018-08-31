const registerQuery = require("../db/query/user_register");

module.exports = async ctx => {
  const {
    request: {
      body: { username }
    }
  } = ctx;
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

  const [duplUser, duplEmail] = [
    await registerQuery.checkDuplicateUser(username),
    await registerQuery.checkDuplicateEmail(email)
  ];

  return duplUser || (duplEmail && duplUser) || duplEmail
    ? duplUser
      ? duplEmail
        ? registerQuery.registerUser(email, password, username)
        : "Email is already existed"
      : "Username is already existed"
    : "Username and email are already existed";
};
