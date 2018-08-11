const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { JWT_SECRET } = require('./configuration/authenticationConfig');
const User = require('./models/user');

//jwt token strategy 
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        //find the user specified in token
        const user = await User.findById(payload.sub);

        //if user does not exist handle it
        if(!user) {
            return done(null, false);
        }

        //otherwise return user
        done(null, user);
    } catch (error) {
        done(error, false);
    }
} ));

//local strategy
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done)=> {
    try {
        //find the user, given the email
        const user = await User.findOne({email});

        //if not simply handle it
        if(!user) {
            return done(null, false);
        }

        //if user is found, check if the password is correct 
        const match = await user.isValidPassword(password);

        //if not handle it
        if(!match) {
            return done(null, false);
        }
        //otherwise return user
        done(null, user);
    } catch(error) {
        done(error, false);
    }
    
}));