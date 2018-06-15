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
//Select what a user typing in URL
module.exports = {
	find_instructor: function (ctx) {
		knex
		.select()
		.table(`instructors`)
		.whereRaw(`id = ?`, ctx)
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
			module.exports.instructorsid_title = get_keys;
			module.exports.instructorsid_data = make_table_body(get_values);
		})
		.catch(err => {
			console.error(`Error: ${err}`);
		})
	},
	find_course_id: function (ctx) {
		knex
		.select()
		.table(`courses`)
		.whereRaw(`id = ?`, ctx)
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
			module.exports.coursesid_title = get_keys;
			module.exports.coursesid_data = make_table_body(get_values);
		})
	},
	find_course_price: function (ctx) {
		knex
		.select()
		.table(`courses`)
		.whereRaw(`price = ?`, ctx)
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
			module.exports.courses_price_title = get_keys;
			module.exports.coursesid_price_data = make_table_body(get_values);
		})
	}
};

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
