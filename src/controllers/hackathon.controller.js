const Hackathon = require("../models/Hackathon");
const Team = require("../models/Team");

exports.createHackathon = async (req, res) => {
    const hackathon = await Hackathon.create({
        ...req.body,
        createdBy: req.user.id
    });

    res.status(201).json(hackathon);
};

exports.getHackathons = async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;

  const [hackathons, total] = await Promise.all([
    Hackathon.find()
      .populate("createdBy", "name email")
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 }),
    Hackathon.countDocuments()
  ]);

  res.json({
    data: hackathons,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    }
  });
};

exports.registerTeam = async (req, res) => {
    const { teamId } = req.body;
    const hackathon = await Hackathon.findById(req.params.id);
    const team = await Team.findById(teamId);

    if (!hackathon || !team) {
        return res.status(404).json({ message: "Hackathon or Team not found" });
    }

    if (hackathon.registeredTeams.includes(teamId)) {
        return res.status(400).json({ message: "Team already registered" });
    }

    if (team.leader.toString() !== req.user.id) {
        return res.status(403).json({ message: "Only team leader can register team" });
    }

    hackathon.registeredTeams.push(teamId);
    await hackathon.save();

    res.json({ message: "Team registered successfully" });
};

exports.getRegisteredTeams = async (req, res) => {
    const hackathon = await Hackathon.findById(req.params.id)
        .populate("registeredTeams");

    if (!hackathon) {
        return res.status(404).json({ message: "Hackathon not found" });
    }

    res.json(hackathon.registeredTeams);
};
