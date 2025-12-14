const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: String,
        repoUrl: String,
        demoUrl: String,
        team: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Team",
            required: true
        },
        hackathon: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hackathon",
            required: true
        },
        submittedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    { timestamps: true }
);

projectSchema.index({ team: 1, hackathon: 1 }, { unique: true });


module.exports = mongoose.model("Project", projectSchema);
