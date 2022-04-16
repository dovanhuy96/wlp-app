const dbConnect = require('../config/db.config');

const todoList = (todo) => {
    this.name_todo = todo.name_todo;
    this.status = todo.status;
}

todoList.findAll = (result) => {
    dbConnect.query("Select * from todos", (err, res) => {
        if (err){
            result (null, err);
        } else {
            result(null, res);
        }

    })
}

module.exports = todoList;