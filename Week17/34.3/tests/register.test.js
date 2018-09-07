const expect = require("expect");
const faker = require("faker");

const register = require("../controllers/user_register");

describe("All register functions are work correctly", () => {
  it("should register to database", async () => {
    const [username, password, email] = [
      faker.internet.userName(),
      faker.internet.password(),
      faker.internet.email()
    ];
    const ctx = {
      request: {
        body: {
          username,
          password,
          email
        }
      }
    }; // ctx obj block scope
    const result = await register(ctx);
    expect(result).toEqual({ status: true });
  });

  it("should return username is already existed", async () => {
    const password = faker.internet.userName();
    const ctx = {
      request: {
        body: {
          username: "Isaias.Donnelly",
          password,
          email: "Forest55@gmail.com"
        }
      }
    }; // ctx obj block scope
    const result = await register(ctx);
    expect(result).toEqual("Username and email are already existed");
  });

  it("should return email is already existed", async () => {
    const [username, password] = [
      faker.internet.userName(),
      faker.internet.password()
    ];
    const ctx = {
      request: {
        body: {
          username,
          password,
          email: "Casimir27@gmail.com"
        }
      }
    }; // ctx obj block scope
    const result = await register(ctx);
    expect(result).toEqual("Email is already existed");
  });

  it("should return username is already existed", async () => {
    const [password, email] = [
      faker.internet.password(),
      faker.internet.email()
    ];
    const ctx = {
      request: {
        body: {
          username: "Jo_Kuhn",
          password,
          email
        }
      }
    }; // ctx obj block scope
    const result = await register(ctx);
    expect(result).toEqual("Username is already existed");
  });

  it("should return username, email or password will not an empty. (all empty)", async () => {
    const ctx = {
      request: {
        body: {
          username: "",
          password: "",
          email: ""
        }
      }
    }; // ctx obj block scope
    const result = await register(ctx);
    expect(result).toEqual("Username, email or password will not an empty");
  });

  it("should return username, email or password will not an empty. (username and password are empty)", async () => {
    const ctx = {
      request: {
        body: {
          username: "",
          password: "",
          email: faker.internet.email()
        }
      }
    }; // ctx obj block scope
    const result = await register(ctx);
    expect(result).toEqual("Username, email or password will not an empty");
  });

  it("should return username, email or password can not include spaces. (all has spaces)", async () => {
    const ctx = {
      request: {
        body: {
          username: "ejfoiwef asdofkpa",
          password: "23ij asdao",
          email: " "
        }
      }
    }; // ctx obj block scope
    const result = await register(ctx);
    expect(result).toEqual(
      "Username, email or password can not include spaces"
    );
  });

  it("should return username, email or password can not include spaces. (username has spaces)", async () => {
    const ctx = {
      request: {
        body: {
          username: "asdfja posdfk ao",
          password: faker.internet.password(),
          email: faker.internet.email()
        }
      }
    }; // ctx obj block scope
    const result = await register(ctx);
    expect(result).toEqual(
      "Username, email or password can not include spaces"
    );
  });

	it("should return username, email or password can not include spaces. (email has spaces)", async () => {
		const ctx = {
			request: {
				body: {
					username: faker.internet.userName(),
					password: faker.internet.password(),
					email: faker.internet.email()
				}
			}
		}
	});
});
