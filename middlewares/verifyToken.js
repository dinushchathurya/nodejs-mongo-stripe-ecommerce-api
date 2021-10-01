const jwt =require('jsonwebtoken')

const api_config = require("../config/api.js");

/* jwt token verify */
const authenticationVerifier = (req, res, next)=> {

    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, api_config.api.jwt_secret,(err, user)=>{
            if(err) res.status(401).json("Invalid token");
            req.user = user;
            next()
        })
    } else {
        return res.status(401).json("You are not authenticated");
    }
}

/* access_level_verifier('admin') */
const accessLevelVerifier = (req, res, next) => {
    authenticationVerifier(req,res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("You are not allowed to perform this task");
        }
    })
}

module.exports = { authenticationVerifier, accessLevelVerifier };