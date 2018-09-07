const sinon = require("sinon");
const database = require("../db/main");
const faker = require("faker");

const [username, password, email] = [
  faker.internet.userName(),
  faker.internet.password(),
  faker.internet.email
];

describe("database save method can work as expected", () => {
	it("should call save once", () => {
		const save = sinon.spy(database, "save");
		database.save(email, username, password);
		save.restore();
		sinon.assert.calledOnce(save);
	});

	it("should pass object with correct values to save with spy", () => {
		const save = sinon.spy(database, "save");
		database.save(email, username, password);
		save.restore();
		sinon.assert.calledWith(save, email, username, password);
	});

	it("should pass object with correct values to save with stub", () => {
		const save = sinon.stub(database, "save");
		database.save(email, username, password);
		save.restore();
		sinon.assert.calledWith(save, email, username, password);
	});

	it("should pass object with correct values to save only once", function() {
		const mock = sinon.mock(database);
		mock
		.expects("save")
		.once()
		.withArgs(email, username, password);
		database.save(email, username, password);
		mock.verify();
		mock.restore();
	});
});

describe("database login method can work as expected", () => {
	it("should call save once", () => {
		const login = sinon.spy(database, "login");
		database.login(username, password);
		login.restore();
		sinon.assert.calledOnce(login);
	});

	it("should pass object with correct values to save with spy", () => {
		const save = sinon.spy(database, "login");
		database.login(username, password);
		save.restore();
		sinon.assert.calledWith(save, username, password);
	});

	it("should pass object with correct values to save with stub", () => {
		const save = sinon.stub(database, "login");
		database.login(username, password);
		save.restore();
		sinon.assert.calledWith(save, username, password);
	});

	it("should pass object with correct values to save only once", function() {
		const mock = sinon.mock(database);
		mock
		.expects("login")
		.once()
		.withArgs(username, password);
		database.login(username, password);
		mock.verify();
		mock.restore();
	});
});