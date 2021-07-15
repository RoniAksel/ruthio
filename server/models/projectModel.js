const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    projectFileNumber: { type: String },
    author:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    userIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    style: {
        shadowColor: {type: String}
    }
});

let Project = mongoose.model("Project", projectSchema);


module.exports = Project;