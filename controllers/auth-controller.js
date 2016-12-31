'use strict';

const passport = require("passport");
const jwt = require('jwt-simple');

const config = require('../config/passport/config');

module.exports = function (data) {
    return {
        login(req, res, next) {
            const auth = passport.authenticate('local', function (error, user) {

                if (error) {
                    next(error);
                    return;
                }

                if (!user) {
                    return res.status(405).json("Not authorized.");
                }

                req.login(user, error => {
                    if (error) {
                        next(error);
                        return;
                    }

                    var token = jwt.encode({ username: req.body.username }, config.jwtSecret);

                    return res.status(200).json({
                        user: {
                            username: req.user.username,
                            favouriteFoodAdditives: req.user.favouriteFoodAdditives,
                            token: token
                        }
                    });
                });
            });

            auth(req, res, next);
        },
        register(req, res) {
            const user = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                token: req.body.token
            };
            console.log(data);
            data.createNewUser(user)
                        .then(dbUser => {
                            req.login(dbUser, error => {
                                if (error) {
                                    next(error);
                                    return;
                                }
                            });

                            return res.status(200).json({
                                user: {
                                    username: dbUser.username,
                                    favouriteFoodAdditives: dbUser.favouriteFoodAdditives,
                                    token: req.user.token
                                }
                            });
                        })
                        .catch(error => res.status(500).json(error));
        }
    }
};