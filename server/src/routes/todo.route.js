const todoRoute = require('express').Router();

const todoController = require('../controllers/todo.controller');

todoRoute.get('/todo', todoController.getAllTodo);


module.exports = todoRoute;