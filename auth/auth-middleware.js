const jwt = require("jsonwebtoken");

const constants = require("../config/constants.js");

module.exports = (req, res, next) => {

    const token = req.headers.authorization;

    const secret = constants.jwtSecret;

    if (token) {
        jwt.verify(token, secret, (error, decodedToken) => {
            if (error) {
                // the token is invalid
                res.status(401).json({ Message: "Cannot access this endpoint without a valid token." });
            } else {
                req.decodedToken = decodedToken;

                next();
            }
        });
    } else {
        res.status(401).json({ message: "please provide credentials to access secret family recipes" });
    }
};
