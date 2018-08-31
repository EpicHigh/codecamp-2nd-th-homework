const expect = require("expect");
const mysql = require("mysql2/promise");
const faker = require("faker");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "koa_login"
});
const tempUserController = require("../controllers/user");
const userController = tempUserController(null, pool);

const next = () => true;
describe("an insert function work correctly", () => {
  const ctx = {
    render(somePage, dataSend) {},
    request: {
      body: {
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email()
      }
    }
  };
  it("should return email, password and email", done => {
    userController
      .insertUser(ctx, next)
      .then(dataSend => {
        expect(dataSend).toEqual(dataSend);
        done();
      })
      .catch(err => done(err));
  });
});

describe("check existed functions should work correctly", () => {
  it("should return email already existed!", done => {
    const ctx = {
      render(somePage, dataSend) {},
      request: {
        body: {
          username: faker.internet.userName(),
          password: faker.internet.password(),
          email: "Sydney.Hodkiewicz@yahoo.com"
        }
      }
    };
    userController
      .insertUser(ctx, next)
      .then(res => {
        expect(res).toEqual({ errorMessage: "Email already existed!<br>" });
        done();
      })
      .catch(err => done(err));
  });

  it("should return username already existed!", done => {
    const ctx = {
      render(somePage, dataSend) {},
      request: {
        body: {
          username: "Alexys.Hagenes36",
          password: faker.internet.password(),
          email: faker.internet.email()
        }
      }
    };
    userController
      .insertUser(ctx, next)
      .then(res => {
        expect(res).toEqual({ errorMessage: "Username already existed!<br>" });
        done();
      })
      .catch(err => done(err));
  });

  it("should return username and email already existed!", done => {
    const ctx = {
      render(somePage, dataSend) {},
      request: {
        body: {
          username: "Alexys.Hagenes36",
          password: faker.internet.password(),
          email: "Sydney.Hodkiewicz@yahoo.com"
        }
      }
    };
    userController
      .insertUser(ctx, next)
      .then(res => {
        expect(res).toEqual({
          errorMessage:
            "Username already existed!<br>Email already existed!<br>"
        });
        done();
      })
      .catch(err => done(err));
  });
});
