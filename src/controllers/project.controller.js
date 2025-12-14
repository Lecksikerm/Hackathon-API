const Project = require("../models/Project");
const Team = require("../models/Team");

exports.submitProject = async (req, res) => {
    const { title, description, repoUrl, demoUrl, teamId, hackathonId } = req.body;

    const team = await Team.findById(teamId);
    if (!team) {
        return res.status(404).json({ message: "Team not found" });
    }

    if (team.leader.toString() !== req.user.id) {
        return res.status(403).json({ message: "Only team leader can submit project" });
    }

    const project = await Project.create({
        title,
        description,
        repoUrl,
        demoUrl,
        team: teamId,
        hackathon: hackathonId,
        submittedBy: req.user.id
    });

    res.status(201).json(project);
};

exports.updateProject = async (req, res) => {
    const project = await Project.findById(req.params.id).populate("team");

    if (!project) {
        return res.status(404).json({ message: "Project not found" });
    }

    if (project.team.leader.toString() !== req.user.id) {
        return res.status(403).json({ message: "Only team leader can update project" });
    }

    Object.assign(project, req.body);
    await project.save();

    res.json(project);
};

exports.getProjectsByHackathon = async (req, res) => {
    const projects = await Project.find({ hackathon: req.params.id })
        .populate("team", "name")
        .populate("submittedBy", "name email");

    res.json(projects);
};
