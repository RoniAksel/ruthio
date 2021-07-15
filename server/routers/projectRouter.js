const router = require("express").Router();
const User = require("../models/userModel");
const Project = require("../models/projectModel");
const auth = require('../middleware/auth')

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

router.get("/", auth, async (req, res) => {
    try {
        const projects = await Project.find({ userIds: req.user }).populate("userIds", "firstName lastName email picUrl");
        res.json(projects)
    } catch (err) {
        console.error(err)
        res.status(500).send();
    }
});


module.exports = router;
