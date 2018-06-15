module.exports = {
	make_table_body: function (get_values) {
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
};