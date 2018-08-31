const expect = require("expect");
const faker = require("faker");

const login = require("../controllers/user_login");

describe("All login functions are work correctly", () => {
  it("should return email and password", async () => {
    const ctx = {
      request: {
        body: {
          email: "Jamaal73@gmail.com",
          password: "BueoL4g4Grxtfgf"
        }
      }
    }; // ctx obj block scope
    const result = await login(ctx);
    expect(result).toEqual({
      email: "Jamaal73@gmail.com",
      password: "BueoL4g4Grxtfgf"
    });
  });

	it("should return email do not match", async () => {
		const ctx = {
			request: {
				body: {
					email: faker.internet.email(),
					password: "BueoL4g4Grxtfgf"
				}
			}
		}; // ctx obj block scope
		const result = await login(ctx);
		expect(result).toEqual("email do not match")
	});

	it("should return password do not match", async () => {
		const ctx = {
			request: {
				body: {
					email: "Jamaal73@gmail.com",
					password: faker.internet.password()
				}
			}
		}; // ctx obj block scope
		const result = await login(ctx);
		expect(result).toEqual("password do not match")
	});
});
