const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/profile", (req, res, next) => {
  const user = req.session.user;
  res.render("profile", {user});
});

router.get("/adventures", (req, res, next) => {
  const user = req.session.user;
  res.render("adventures");
});
module.exports = router;
