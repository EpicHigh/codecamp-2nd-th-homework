class Employee {
	constructor(firstname, lastname, salary) {
		this._firstname = firstname;
		this._lastname = lastname;
		this._salary = salary; // simulate private variable
	}

	setSalary(newSalary) { // simulate public method
		// return newSalary ถ้ามีเงินเดือนใหม่มีค่ามากกว่า this._salary
		// return false ถ้าเงินเดือนใหม่มีค่าน้อยกว่าเท่ากับ this._salary

		if (newSalary > this._salary) {
			console.log(`Somsri's salary has been set to ${newSalary}`);
			return newSalary
		} else {
			console.log(`Somsri's salary is less than before!!`);
			return false
		}
	}

	getSalary() {  // simulate public method
		return this._salary;
	};

	work(employee) {
		// leave blank for child class to be overidden
	}

	leaveForVacation(year, month, day) {

	}

	gossip(firstname, gossip) {
		console.log(`Hey ${firstname._firstname}, ${gossip}`)
	}
}

exports.Employee = Employee;