const sinon = require("sinon");
const faker = require("faker");
const controller = require("../controller/main");
const ctx = require("./mock/ctx_mock").user(
  faker.internet.userName(),
  faker.internet.password(),
  faker.internet.email()
);

describe("controller save method can work as expected", () => {
	it("should call save once", () => {
		const save = sinon.spy(controller, "save");
		controller.save(ctx);
		save.restore();
		sinon.assert.calledOnce(save);
	});

	it("should pass object with correct values to save with spy", () => {
		const save = sinon.spy(controller, "save");
		controller.save(ctx);
		save.restore();
		sinon.assert.calledWith(save, ctx);
	});

	it("should pass object with correct values to save with stub", () => {
		const save = sinon.stub(controller, "save");
		controller.save(ctx);
		save.restore();
		sinon.assert.calledWith(save, ctx);
	});

	it("should pass object with correct values to save only once", () => {
		const mock = sinon.mock(controller);
		mock
		.expects("save")
		.once()
		.withArgs(ctx);
		controller.save(ctx);
		mock.verify();
		mock.restore();
	});
});

describe("controller login method can work as expected", () => {
	it("should call save once", () => {
		const login = sinon.spy(controller, "login");
		controller.login(ctx);
		login.restore();
		sinon.assert.calledOnce(login);
	});

	it("should pass object with correct values to save with spy", () => {
		const login = sinon.spy(controller, "login");
		controller.login(ctx);
		login.restore();
		sinon.assert.calledWith(login, ctx);
	});

	it("should pass object with correct values to save with stub", () => {
		const login = sinon.stub(controller, "login");
		controller.login(ctx);
		login.restore();
		sinon.assert.calledWith(login, ctx);
	});

	it("should pass object with correct values to save only once", () => {
		const mock = sinon.mock(controller);
		mock
		.expects("login")
		.once()
		.withArgs(ctx);
		controller.login(ctx);
		mock.verify();
		mock.restore();
	});
});