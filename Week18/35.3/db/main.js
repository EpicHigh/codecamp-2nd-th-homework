const db = require("./db");

const check = (userEmail, userName) => {
  const [user] = db.filter(
    ({ email, username }) => email === userEmail || username === userName
  );
  return user && user.length === 0
    ? "Save successful"
    : "Email or username is already used";
};

module.exports.save = ( email, username, password ) =>
  email && username && password
    ? check(email, username)
    : `Every fill are require`;

module.exports.login = (useremail, userpassword) => {
  const [user] = db.filter(({ email }) => email === useremail);
  return user
    ? user.password === userpassword
      ? { email, password }
      : "password do not match"
    : "email do not match";
};
