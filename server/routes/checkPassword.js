const express = require("express");
const router = express.Router();

router.post("/api/check-password", (req, res) => {
  const userPassword = req.body.password;
  console.log('User Password:', userPassword);
  console.log('Env Password:', process.env.PASSWORD);
  
  if (userPassword === process.env.PASSWORD) {
    res.send("Correct");
  } else {
    res.send("Password is incorrect");
  }
});

module.exports = router;
