const expect = require("expect");
const spy = require("sinon").spy;
const sinon = require("sinon");
const faker = require("faker");

const ctx = require("./spies/ctx_mock");

describe("spy ctx and next work correctly", () => {
  const ctxUserSpy = spy(ctx, "user");
  const ctxNextSpy = spy(ctx, "next");
  ctx.user(
    faker.internet.userName(),
    faker.internet.password(),
    faker.internet.email()
  );
  ctx.next();
  ctxUserSpy.restore();
  ctxNextSpy.restore();
  it("ctx should called once", () => {
    expect(ctxUserSpy.calledOnce).toEqual(true);
  });
  it("ctx next should called once", () => {
    expect(ctxNextSpy.calledOnce).toEqual(true);
  });
});

describe("mock ctx and next", () => {
	it("should called once", () => {
		const mock = sinon.mock(ctx);
		mock.expects("user").once();
		ctx.user("TestUserName", "TestPassword", "test@test.test");
		mock.verify();
		mock.restore()
	});
	it("should called with arguments", () => {
		const mock = sinon.mock(ctx);
		mock.expects("user").once().withArgs("TestUserName", "TestPassword", "test@test.test");
		ctx.user("TestUserName", "TestPassword", "test@test.test");
		mock.verify();
		mock.restore()
	});
	it("should called once with mock", () => {
		const mock = sinon.mock(ctx);
		mock.expects("next").once();
		ctx.next();
		mock.verify();
		mock.restore()
	});
});