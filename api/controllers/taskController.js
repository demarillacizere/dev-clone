const taskModel = require('../models/task')
// const data = require('../data/tasks')

// Display list of all tasks
exports.list_tasks = async (req, res) => {
    console.log('listing')
    const tasks = await taskModel.find({});
    try {
        res.send(tasks);
      } catch (error) {
        res.status(500).send(error);
      }
};

exports.create_task = async (req, res) => {
    const task = new taskModel(req.body);
  
    try {
      await task.save();
      res.status(201).json({id:task._id});
    } catch(error) {
      res.status(500).send(error);
    }
};

// retrieve a task by ID
exports.retrieve_task = async (req, res) => {
  try {
      const taskId = req.params.taskId
      console.log(taskId)
      const task = await taskModel.find({ _id: taskId });  
      res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete a task by ID
exports.delete_task = async (req, res) => {
  try {
      const taskId = req.params.taskId
      console.log("deleting task " + taskId)
      const task = await taskModel.findByIdAndRemove({ _id: taskId });  
      res.status(204).send()
      
  } catch (error) {
    const taskId = req.params.taskId
    res.status(404)
    .json({
    error: `There is no task at id ${taskId}`
  })
  }
};

// update a task by ID
exports.update_task = async (req, res) => {
    const taskUpdate = new taskModel(req.body);
    try {
        const taskId = req.params.taskId
        console.log("updating task " + taskId)
        const task = await taskModel.findByIdAndUpdate({ _id: taskId},{title:taskUpdate.title,is_completed:taskUpdate.is_completed});  
        res.status(204).send()
        
    } catch (error) {
      const taskId = req.params.taskId
      res.status(404).json({error: `There is no task at id ${taskId}`})
    }
  };