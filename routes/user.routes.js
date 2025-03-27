const express = require("express");
const User = require("../models/User");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, async function (req, res) {
    try {
        const searchQuery = req.query.search;
        let users;

        if (searchQuery) {
            users = await User.find({
                $or: [
                    { firstName: searchQuery },
                    { lastName: searchQuery }
                ]
            });
        } else {
            users = await User.find();
        }

        if (users.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
