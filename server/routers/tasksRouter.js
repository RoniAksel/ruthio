const router = require("express").Router();
const User = require("../models/userModel");
const Project = require("../models/projectModel");
const Task = require("../models/tasksModel");
const auth = require('../middleware/auth')


// Post a new Task 

router.post("/", auth, async (req, res) => {
    try {
        const { taskTitle, projectFileNumber, project, userIds, author, text } = req.body;
        const newTask = new Task({
            taskTitle,project, projectFileNumber, userIds, text, author
        });

        savedTasks = await newTask.save();

        res.json(savedTasks);

    } catch (err) {
        console.error(err)
        res.status(500).send();
    }
});

// Get the connected Tasks

router.get("/", auth, async (req, res) => {
    try {
        const tasks = await Task.find({ userIds: req.user }).populate("userIds author", "firstName lastName email picUrl");
        res.json(tasks)
    } catch (err) {
        console.error(err)
        res.status(500).send();
    }
});

router.get("/:id", auth, async (req, res) => {
    try {
        const tasks = await Task.find({ project: req.params.id }).populate("userIds author project", "projectFileNumber projectName firstName lastName email picUrl");
        res.json(tasks)
    } catch (err) {
        console.error(err)
        res.status(500).send();
    }
});




module.exports = router;
