const passport = require('passport');
const router = require('express-promise-router')();
const passportConf = require('../passport');
const MovieController = require('../controllers/movies');

router.route('/popular')
    .get(passport.authenticate('jwt', {session: false}), MovieController.popular);
router.route('/:movieId')
    .get(passport.authenticate('jwt', {session: false}), MovieController.details);
module.exports = router;