var express = require('express');
var router = express.Router();

todos={};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addTodo', function(req, res) {
    res.end(addTodo(req.body.id, req.body.todo));
});

router.post('/getTodos', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(getTodos(req.body.id)));
});

router.post('/removeTodo', function(req, res) {
    res.end(removeTodo(req.body.id, req.body.todo));
});

function getTodos(id) {
    tt =  todos[id];
    if(!tt) todos[id] = {};
    return todos[id];
}

function addTodo(id, todo) {
    getTodos(id)[todo.id] = todo;
}

function removeTodo(id, todo) {
    delete getTodos(id)[todo.id];
}

module.exports = router;
