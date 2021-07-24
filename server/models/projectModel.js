const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    projectFileNumber: { type: String },
    date: { type: Date },
    author:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    userIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    style: {
        shadowColor: { type: String },
        logoUrl: { type: String }
    },
    isActive:{type: Boolean, default: true}
});

let Project = mongoose.model("Project", projectSchema);


module.exports = Project;