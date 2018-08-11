const passport = require('passport');
const router = require('express-promise-router')();
const passportConf = require('../passport');
const SeriesController = require('../controllers/series');

router.route('/popular')
    .get(passport.authenticate('jwt', {session: false}), SeriesController.popular);
router.route('/:seriesId')
    .get(passport.authenticate('jwt', {session: false}), SeriesController.details);
module.exports = router;