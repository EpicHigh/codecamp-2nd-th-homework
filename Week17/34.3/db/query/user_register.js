const knex = require("../connection");

module.exports.checkDuplicateUser = async username => {
  const user = await knex
    .select()
    .from("user")
    .where(knex.raw("username = ?", username));
  return user.length === 0;
};

module.exports.checkDuplicateEmail = async email => {
  const userEmail = await knex
    .select()
    .from("user")
    .where(knex.raw("email = ?", email));
  return userEmail.length === 0;
};

module.exports.registerUser =  (email, password, username) => {
	return new Promise((resolve, reject) => {
    knex("user")
      .insert({ email, password, username })
      .then(() => resolve({status: true}))
      .catch(() => reject({status: false}));
  });
};
