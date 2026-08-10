const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/controllers");
const middleware = require("../middleware/middleware");

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", middleware, async (req, res) => {
  res.json({ message: `Hello user ${req.user.userId}`, user: req.user });
});

module.exports = router;
