module.exports = {
    client: "pg",
    connection: {
        host: "127.0.0.1",
        user: "ap",
        password: "",
        database: "codecamp"
    },
    pool: {min: 1, max: 5}
};