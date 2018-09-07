const db = require("./db");

module.exports = {
  createPool: {
    host: "localhost",
    user: "root",
    database: "koa_login",
    query(queryString, searchQuery) {
      const [search] = searchQuery;
      return (
        db.filter(
          ({ email, username }) => email === search || username === search
        ) && [{ searchQuery, insertId: 1234 }]
      );
    }
  }
};
