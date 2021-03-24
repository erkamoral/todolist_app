var express = require('express')
var router = express.Router()
const uuid = require('uuid')
const mongoose = require('mongoose')
const Todo = require('./db.js')

//Routes for '/api/'

router.post('/todos', async function (req, res) {
    const newTodo = new Todo({
        id: uuid.v4(),
        title: req.body.title,
        durum: req.body.durum
    })

    await newTodo.save(function (err, newTodo) {
        if (err) return console.error(err);
        res.send('Posted Todo: ' + req.body.title)
    })
})
//getting what todos
router.get('/todos', function (req, res) {

    Todo.find({}, {'title': 1, 'durum': 1, 'id': 1, '_id':0},function (err, allTodos) {
        if (err) return console.error(err)
        res.send(allTodos)
    })
})
//remove todos
router.delete('/todos/:id', function (req, res) {

    Todo.find({id: req.params.id}).deleteOne(function (err, obj) {
        if (err) return console.error(err);
        res.status("200").send("deleted")
    })
})
//edit todos like change title or change state(durum)
router.put('/todos/:id', function (req, res) {
    if (!req.body.title){
    Todo.updateMany({id: req.params.id},    //condition
                {durum: req.body.durum},
                function (err, obj) {
        if (err) return console.error(err);
        else {
            if (obj.n === 0) {
                res.send('id not found')
            } else {
                res.status("200").send(req.body.durum)
            }
        }
    })
    }
    else{
        Todo.updateMany({id: req.params.id},    //condition
            {title: req.body.title},//info updated
            function (err, obj) {
            if (err) return console.error(err);
            else {
                if (obj.n === 0) {
                    res.send('id not found')
                } else {
                    res.send("200",req.body.title)
                }
            }
        })
    }
})

module.exports = router
