'use strict';

module.exports = function(app, data) {
    const express = require("express");
    console.log(data);
    const authController = require("../controllers/auth-controller")(data);

    const usersRouter = express.Router();

    usersRouter
        .post("/login", authController.login)
        .post("/register", authController.register)

    app.use("/user", usersRouter);
}