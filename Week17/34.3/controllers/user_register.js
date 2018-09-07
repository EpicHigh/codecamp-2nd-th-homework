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

  console.log(`username: ${username}, email: ${email}, password: ${password}`);

  return username !== "" && email !== "" && password !== ""
    ? !String(username).includes(" ") &&
      !String(email).includes(" ") &&
      !String(password).includes(" ")
      ? duplUser || (duplEmail && duplUser) || duplEmail
        ? duplUser
          ? duplEmail
            ? registerQuery.registerUser(email, password, username)
            : "Email is already existed"
          : "Username is already existed"
        : "Username and email are already existed"
      : "Username, email or password can not include spaces"
    : "Username, email or password will not an empty";
};
