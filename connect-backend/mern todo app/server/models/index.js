const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true }, () => console.log('connected to DB'));
//const connection = mongoose.connection;

//import todos 
module.exports.Todos = require('./todoschema')