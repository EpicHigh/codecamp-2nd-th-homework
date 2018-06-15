//Connect the database
const knex = require("knex")({
	client: "pg",
	connection: {
		host: "127.0.0.1",
		user: "ap",
		password: "",
		database: "codecamp"
	}
});
//Select courses that have not an instructor.
knex
.select({
	"Course name": "courses.name",
	"Instructors name": knex.raw("COALESCE(instructors.name,'No Instructor')"),
	Students: knex.raw("COUNT(*)"),
	"Course price": "courses.price",
	Total: knex.raw("(COUNT(*) * price)")
})
.from("courses")
.leftJoin("enrolls", "courses.id", "enrolls.course_id")
.leftJoin("instructors", "courses.teach_by", "instructors.id")
.whereNotNull("enrolls.student_id")
.groupBy("courses.name", "courses.price", "instructors.name")
.then(data => {
	let get_keys = Object.keys(data[0]).map(x => {
		return x;
	});
	let get_values = data.map(x => {
		let temp = [];
		for (let i of get_keys) {
			temp.push(x[i]);
		}
		return temp;
	});
	module.exports.courses_title = get_keys;
	module.exports.courses_data = make_table_body(get_values);
})
.catch(err => {
	console.error(`Error: ${err}`);
});

knex
.select({
	"Student ID": "students.id",
	Name: "students.name",
	Enrolled: knex.raw("COUNT(*)"),
	Paid: knex.raw("SUM(price)")
})
.from("students")
.leftJoin("enrolls", "students.id", "enrolls.student_id")
.leftJoin("courses", "enrolls.course_id", "courses.id")
.whereNotNull("enrolls.student_id")
.groupBy("students.id", "students.name")
.orderBy("students.id", "ASC")
.then(data => {
	let get_keys = Object.keys(data[0]).map(x => {
		return x;
	});
	let get_values = data.map(x => {
		let temp = [];
		for (let i of get_keys) {
			temp.push(x[i]);
		}
		return temp;
	});
	module.exports.students_title = get_keys;
	module.exports.students_data = make_table_body(get_values);
})
.catch(err => {
	console.error(`Error: ${err}`);
});

function make_table_body(get_values) {
	let temp = ``;
	for (let i in get_values) {
		temp += `<tr>`;
		for (let j of get_values[i]) {
			temp += `<td>${j}</td>`;
		}
		temp += `</tr>`;
	}
	return temp;
}
