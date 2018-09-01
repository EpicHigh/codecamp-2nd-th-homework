const registerQuery = require("../db/query/user_register");

module.exports = async ({
  request: {
    body: { username, email, password }
  }
}) => {
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
