var mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    id: String,
    title: String,
    durum: String
})
const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo