const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const { authenticate, storeReturnTo } = require("../middleware");

router.get("/register", users.registerForm);

router.post("/register", users.register);

router.get("/login", users.loginForm);

router.post("/login", storeReturnTo, authenticate, users.login);

router.get("/logout", users.logout);

module.exports = router;
