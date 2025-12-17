const express = require("express");
const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());

app.use("/api/v1", require("./routes"));

app.get("/", (req, res) => {
    res.json({ message: "Hackathon API is running" });
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

module.exports = app;

