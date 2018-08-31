module.exports = function(userModel, pool) {
  return {
    stupidHash(password) {
      return "123" + password + "123";
    },
	  async usernameExisted(username) {
		  const [usernameQuery] = await pool.query(
			  `SELECT username FROM user WHERE username = ?`,
			  [username]
		  );
		  return usernameQuery.length && !!usernameQuery[0].username
	  },

	  async emailExisted(email) {
		  const [emailQuery] = await pool.query(
			  `SELECT email FROM user WHERE email = ?`,
			  [email]
		  );
		  return emailQuery.length && !!emailQuery[0].email
	  },

    async insertUser(ctx, next) {
      let errorMessage = "";
      if (await this.usernameExisted(ctx.request.body.username)) {
        errorMessage += "Username already existed!<br>";
      }
      if (await this.emailExisted(ctx.request.body.email)) {
        errorMessage += "Email already existed!<br>";
      }
      const dataSend = { errorMessage };
      if (errorMessage === "") {
        const sql = `INSERT INTO user (username, password, email) VALUES (?, ? ,?)`;
        const [resultInsert] = await pool.query(sql, [
          ctx.request.body.username,
          this.stupidHash(ctx.request.body.password),
          ctx.request.body.email
        ]);
        dataSend.userId = resultInsert.insertId;
        dataSend.username = ctx.request.body.username;
      }
      await ctx.render("register_result", dataSend);
      await next();
      return dataSend;
    }
  };
};
