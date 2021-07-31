const mongoose = require('mongoose');

const taskScehma = new mongoose.Schema({
  taskTitle: { type: String, required: true },
  projectFileNumber: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  untilDate: { type: Date },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  userIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  isActive: { type: Boolean, default: true },
  priority:{type:String},
  text: { type: String },
},
  {
    timestamps: true,
  }
);

let Task = mongoose.model("task", taskScehma);


module.exports = Task;