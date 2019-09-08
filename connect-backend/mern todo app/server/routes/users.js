var express = require('express');
var router = express.Router();
var db = require('../models/index');

//path: /todos

/* GET todos listing. */
router.get('/', function (req, res, next) {
  db.Todos.find()
    .then((data) => res.json(data))
    .catch((err) => res.send(err))
});

//create a todo
router.post('/', (req, res) => {
  db.Todos.create({
    todo_description: req.body.todo_description,
    todo_responsible: req.body.todo_responsible,
    todo_priority: req.body.todo_priority,
    todo_completed: req.body.todo_completed
  })
    .then((data) => res.send(data))
    .catch((err) => console.log(err))

})

//update a todo
//path - /todos/:id
router.put('/:id', (req, res) => {
  db.Todos.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => res.json(req.body))
    .catch((err) => res.send(err))
})

//delete a todo
router.delete('/:id', (req, res) => {
  db.Todos.findOneAndDelete({ _id: req.params.id })
    .then(() => res.json({ product: deleted }))
    .catch((err) => res.send(err))
})



module.exports = router;
