const database = require("../db/main");

module.exports.save = ({
  request: {
    body: { username, email, password }
  }
}) => {
	return database.save(email, username, password)
};

module.exports.login = ({
	request: {
		body: { email, password }
	}
}) => {
	return database.login(email, password)
};
