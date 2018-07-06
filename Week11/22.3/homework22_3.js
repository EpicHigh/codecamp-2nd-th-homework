const {Employee} = require("./Employee");
const fs = require("fs");

class CEO extends Employee {
	constructor(firstname, lastname, salary) {
		super(firstname, lastname, salary);
		this.dressCode = "suit";
		this._employee = [];
	}

	getSalary() {
		// simulate public method
		return super.getSalary() * 2;
	}

	_fire(employee) {
		this.dressCode = "tshirt";
		console.log(
			`${employee._firstname} has been fired! Dress with :${this.dressCode}`
		);
	}

	_hire(employee) {
		console.log(
			`${employee._firstname}  has been hired back! Dress with :${
				this.dressCode
				}`
		);
	}

	_seminar() {
		this.dressCode = "suit";
		console.log(`He is going to seminar Dress with :${this.dressCode}`);
	}

	work(employee) {
		// simulate public method
		this._fire(employee);
		this._hire(employee);
		this._seminar();
		this._golf();
	}

	increaseSalary(employee, newSalary) {
		this._firstname = employee._firstname;
		this._salary = employee._salary;
		this.setSalary(newSalary);
	}

	_golf() {
		// simulate private method
		this.dressCode = "golf_dress";
		console.log(
			"He goes to golf club to find a new connection." +
			" Dress with :" +
			this.dressCode
		);
	}

	async readFile() {
		await fs.readFile(`homework2_1.json`, `utf8`, function (err, data) {
			if (err) throw err;
			this.employeesRaw = JSON.parse(data);
			for (let i of this.employeesRaw) {
				//console.log(i);
				this._employee.push([new Programmer(i.firstname, i.lastname, i.salary, i.id, "front-end")])
			}
			console.log(this._employee)
			//let employees = new Programmer()
		}.bind(this))
	}
}


class Programmer extends Employee {
	constructor(firstname, lastname, salary, id, type) {
		super(firstname, lastname, salary);
		this._id = id;
		this._type = type;
	}

	work(employee) {
		console.log(`Working with ${employee}`)
	}

	writeWebsite() {
		console.log(`Write a website`)
	}

	repairComputer() {
		console.log(`Repair a college's computer`)
	}

	installWindows() {
		console.log(`Installing windows might take an eternity`)
	}
}

let somchai = new CEO("Somchai", "Sudlor", 30000);

somchai.readFile();
