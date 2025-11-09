const User = require("../models/user");

const registerForm = (req, res) => {
  res.render("users/register");
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", "Succefully registered");
      res.redirect("/campgrounds");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/register");
  }
};

const loginForm = (req, res) => {
  res.render("users/login");
};

const login = (req, res) => {
  req.flash("success", "Welcome back!");
  res.redirect(res.locals.returnTo || "/campgrounds");
};

const logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.flash("success", "Goodbye!");
    res.redirect("/campgrounds");
  });
};

module.exports = { registerForm, register, loginForm, login, logout };
