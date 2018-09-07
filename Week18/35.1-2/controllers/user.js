const user_Model = require("../models/user_model");

module.exports = (userModel, pool) => user_Model(userModel,pool);
