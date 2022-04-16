const mysql = require('mysql');

const dbconnect = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'node_crud'
});

dbconnect.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("connected DB!");

    // const sql = "CREATE TABLE todos (name_todo VARCHAR(25), status BOOLEAN NOT NULL DEFAULT 0)";
    // const sql = "INSERT INTO todos (name_todo, status) VALUES ('todo2', 'false')"
    // dbconnect.query(sql, function(err, result) {
    //     if (err) throw err;
    //     // console.log("created table!")
    // })
})

module.exports = dbconnect;