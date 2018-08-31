const knex = require("../connection");

module.exports.checkUser = async (email, password) => {
  const [user] = await knex
    .select()
    .from("user")
    .where(knex.raw("email = ?", email));
  return user
    ? user.password === password
      ? { email, password }
      : "password do not match"
    : "email do not match";
};


