const router = require("express").Router();
const User = require("../models/userModel");
const Project = require("../models/projectModel");
const auth = require('../middleware/auth')


// Post a new project 

router.post("/", auth, async (req, res) => {
    try {
        const { projectName, projectFileNumber, userIds, style, author } = req.body;
        const newProject = new Project({
            projectName, projectFileNumber, userIds, style, author
        });

        savedProjects = await newProject.save();

        res.json(savedProjects);

    } catch (err) {
        console.error(err)
        res.status(500).send();
    }
});

// Get the users projects

router.get("/", auth, async (req, res) => {
    try {
        const projects = await Project.find({ userIds: req.user }).populate("userIds", "firstName lastName email picUrl");
        res.json(projects)
    } catch (err) {
        console.error(err)
        res.status(500).send();
    }
});

// Delete Project

router.delete("/:id", auth, async (req, res) => {
    try {
        await Project.findByIdAndRemove(req.params.id || req.body.id)
            .then((project) => {
                if (project) {
                    res.json(project);
            }    
        })
    } catch (err) {
        console.error(err)
        res.status(500).send();
    }
})

// Update Project


module.exports = router;
