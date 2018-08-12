const passport = require('passport');
const router = require('express-promise-router')();
const passportConf = require('../passport');
const MovieController = require('../controllers/movies');

router.use(passport.authenticate('jwt', {session: false}));

router.route('/popular')
    .get(MovieController.popular);
router.route('/search')
    .get(MovieController.search);
router.route('/:movieId')
    .get(MovieController.details);

module.exports = router;