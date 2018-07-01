const {Employee} = require("./Employee");

class CEO extends Employee {
	constructor(firstname, lastname, salary) {
		super(firstname, lastname, salary);
		this.dressCode = "suit";
	}

	getSalary() {  // simulate public method
		return super.getSalary() * 2;
	};

	_fire(employee) {
		this.dressCode = "tshirt";
		console.log(`${employee._firstname} has been fired! Dress with :${this.dressCode}`)
	}

	_hire(employee) {
		console.log(`${employee._firstname}  has been hired back! Dress with :${this.dressCode}`)
	}

	_seminar() {
		this.dressCode = "suit";
		console.log(`He is going to seminar Dress with :${this.dressCode}`)
	}

	work(employee) {  // simulate public method
		this._fire(employee);
		this._hire(employee);
		this._seminar();
		this._golf();
	}

	increaseSalary(employee, newSalary) {
		this._firstname = employee._firstname;
		this._salary = employee._salary;
		this.setSalary(newSalary)

	}

	_golf() { // simulate private method
		this.dressCode = "golf_dress";
		console.log("He goes to golf club to find a new connection." + " Dress with :" + this.dressCode);

	};
}

let somchai = new CEO("Somchai", "Sudlor", 30000);
let somsri = new Employee("Somsri", "Sudsuay", 22000);
somchai.gossip(somsri, "Today is very cold!");
somchai.work(somsri);
somchai.increaseSalary(somsri, 20);
somchai.increaseSalary(somsri, 25000);