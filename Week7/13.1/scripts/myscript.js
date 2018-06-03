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
    .select(
        {course_id: "id"},
        {course_name: "name"},
        {course_price: "price"}
    )
    .from("courses")
    .whereNull("teach_by")
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
        //console.log(`course_data: ${arr.length}`);
        module.exports.course_title = get_keys;
        module.exports.course_data = get_values;
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });
//Select instructors that have not a course.
knex
    .select(
        {instructors_id: "instructors.id"},
        {instructors_name: "instructors.name"}
    )
    .from("instructors")
    .leftJoin("courses", "instructors.id", "courses.teach_by")
    .whereNull("teach_by")
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
        module.exports.instructors_data = get_values;
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });
