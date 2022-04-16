const todo = require('../models/todo.model');

exports.getAllTodo = async (req, res) => {
    await todo.findAll((err, todo) => {
        if (err) {
            res.send(err);
        } else {
            res.send(todo);
        }
    });
};

