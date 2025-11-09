const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const { authenticate, storeReturnTo } = require("../middleware");

router.route("/register").get(users.registerForm).post(users.register);

router
  .route("/login")
  .get(users.loginForm)
  .post(storeReturnTo, authenticate, users.login);

router.get("/logout", users.logout);

module.exports = router;
