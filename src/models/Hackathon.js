const mongoose = require("mongoose");

const hackathonSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: String,
        startDate: Date,
        endDate: Date,
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        registeredTeams: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Team"
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Hackathon", hackathonSchema);
