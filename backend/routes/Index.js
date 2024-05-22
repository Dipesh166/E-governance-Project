const express = require("express");
const router = express.Router();

const complainRouter = require("./Complain");
const replyRouter = require("./Reply");

router.get("/", (req, res) => {
  res.send("This api is Complain app ");
});

router.use("/complains", (req, res) => {
    res.send("This api is complain api");
    complainRouter;
  });


  router.use("/replies", (req, res) => {
    res.send("This api is reply api");
    replyRouter;
  });


module.exports = router;