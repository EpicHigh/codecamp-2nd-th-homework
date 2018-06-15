//Connect the database
const knex = require("knex")({
	client: "mysql2",
	connection: {
		host: "127.0.0.1",
		user: "root",
		password: "",
		database: "design_pattern_mysql"
	}
});
//Select all of instructor.
knex
.select()
.table(`instructors`)
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
	module.exports.instructors_title = get_keys;
	module.exports.instructors_data = make_table_body(get_values);
})
.catch(err => {
	console.error(`Error: ${err}`);
});

//A function that make the table body.
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
