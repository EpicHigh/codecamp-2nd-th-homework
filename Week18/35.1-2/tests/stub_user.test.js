const expect = require("expect");
const mysql = require("./stubs/query");
const faker = require("faker");
const stub = require("sinon").stub;
const pool = mysql.createPool;

const tempUserController = require("../controllers/user");
const userController = tempUserController(null, pool);
const ctx = require("./spies/ctx_mock").user(
  faker.internet.userName(),
  faker.internet.password(),
  faker.internet.email()
);
const next = () => true;

describe("an insert function work correctly", () => {
  const insertUserStub = stub(userController, "insertUser");
  userController.insertUser(ctx, next);
  insertUserStub.restore();
  it("should called with arguments ctx and next", () => {
    expect(insertUserStub.calledWith(ctx, next)).toEqual(true);
  });
  it("should called once", () => {
    expect(insertUserStub.calledOnce).toEqual(true);
  });
});

describe("a usernameExisted function work correctly", () => {
  const usernameExistedStub = stub(userController, "usernameExisted");
  const username = faker.internet.userName();
  userController.usernameExisted(username);
  usernameExistedStub.restore();
  it("should called with an argument username", function() {
    expect(usernameExistedStub.calledWith(username)).toEqual(true);
  });
  it("should called once", () => {
    expect(usernameExistedStub.calledOnce);
  });
});

describe("an emailExisted function work correctly", () => {
  const emailExistedStub = stub(userController, "emailExisted");
  const email = faker.internet.email();
  userController.emailExisted(email);
  emailExistedStub.restore();
  it("should called with an argument email", () => {
    expect(emailExistedStub.calledWith(email)).toEqual(true);
  });
  it("should called once", () => {
    expect(emailExistedStub.calledOnce).toEqual(true);
  });
});
