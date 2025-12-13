const Team = require("../models/Team");

exports.createTeam = async (req, res) => {
    const { name, description } = req.body;

    const team = await Team.create({
        name,
        description,
        leader: req.user.id,
        members: [req.user.id]
    });

    res.status(201).json(team);
};

exports.getTeam = async (req, res) => {
    const team = await Team.findById(req.params.id)
        .populate("leader", "name email")
        .populate("members", "name email");

    if (!team) {
        return res.status(404).json({ message: "Team not found" });
    }

    res.json(team);
};

exports.joinTeam = async (req, res) => {
    const team = await Team.findById(req.params.id);

    if (!team) {
        return res.status(404).json({ message: "Team not found" });
    }

    if (team.members.includes(req.user.id)) {
        return res.status(400).json({ message: "Already a team member" });
    }

    if (team.members.length >= team.maxMembers) {
        return res.status(400).json({ message: "Team is full" });
    }

    team.members.push(req.user.id);
    await team.save();

    res.json({ message: "Joined team successfully" });
};

exports.changeLeader = async (req, res) => {
    const { newLeaderId } = req.body;
    const team = await Team.findById(req.params.id);

    if (!team) {
        return res.status(404).json({ message: "Team not found" });
    }

    if (team.leader.toString() !== req.user.id) {
        return res.status(403).json({ message: "Only current leader can change leader" });
    }

    if (!team.members.includes(newLeaderId)) {
        return res.status(400).json({ message: "New leader must be a team member" });
    }

    team.leader = newLeaderId;
    await team.save();

    res.json({ message: "Team leader changed successfully" });
};


exports.removeMember = async (req, res) => {
    const team = await Team.findById(req.params.id);

    if (!team) {
        return res.status(404).json({ message: "Team not found" });
    }

    if (team.leader.toString() !== req.user.id) {
        return res.status(403).json({ message: "Only leader can remove members" });
    }

    team.members = team.members.filter(
        member => member.toString() !== req.params.userId
    );

    await team.save();

    res.json({ message: "Member removed" });
};
