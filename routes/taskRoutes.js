var express = require('express')
var taskController = require('../controllers/taskController')
var router = express.Router()
 
// list all tasks
router.get('/tasks', taskController.list_tasks)

// create a task
router.post('/tasks', taskController.create_task)

// retrieve a task by ID
router.get('/tasks/:taskId', taskController.retrieve_task)

// update a task by ID
router.put('/tasks/update/:taskId', taskController.update_task)

// delete a task by ID
router.delete('/tasks/delete/:taskId', taskController.delete_task)

// a 404 route
router.get('/about', function(req, res){
    res.send("A sample GET route")
})

module.exports = router