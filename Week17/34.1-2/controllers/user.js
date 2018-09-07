const user_Model = require("../models/user_model");

module.exports = (userModel, pool) => {
  return user_Model(userModel,pool);
};

