const JWT = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../configuration/authenticationConfig');

//generating token for a user 
signToken = user => {
    return JWT.sign({
        iss: 'SeriesFollowerApi',                           // issuer
        sub: user.id,                                       // subject
        iat: new Date().getTime(),                          // issued at
        exp: new Date().setDate(new Date().getDate() + 7)   // expiration time 
    }, JWT_SECRET );
}

module.exports = {
    signUp: async (req, res, next) => {
        const { email, password } = req.value.body;
        
        //check if there is no user with the given email
        const foundUser = await User.findOne({ email });
        if(foundUser) { 
            return res.status(403).json({error: "Email is already in use."}); 
        }
        
        //create user
        const newUser = new User( { email, password } );
        await newUser.save();

        //generate token
        const token = signToken(newUser);

        res.status(200).json({ token });
    },
    signIn: async (req, res, next) => {
        const token = signToken(req.user);
        res.status(200).json({ token });
    }
}