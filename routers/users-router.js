const router = require("express").Router();

const Users = require("../models/users-model.js");
const restricted = require("../auth/auth-middleware.js");

router.get("/", restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json({ users, decodedToken: req.decodedToken });
        })
        .catch(err => res.send(err));
});


router.get("/:id", restricted, (req, res) => {
    Users.findById()
        .then(users => {
            res.status(200).json({ users, decodedToken: req.decodedToken });
        })
        .catch(err => res.send(err));
});


module.exports = router;