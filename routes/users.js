const passport = require('passport');
const router = require('express-promise-router')();
const UserController = require('../controllers/users');
const { validateBody, schemas } = require('../helpers/routeHelpers');
const passportConf = require('../passport');

router.route('/signUp')
    .post(validateBody(schemas.authSchema),UserController.signUp);

router.route('/signIn')
    .post(validateBody(schemas.authSchema), passport.authenticate('local', {session: false}), UserController.signIn);

router.route('/authenticate')
    .get(passport.authenticate('jwt', {session: false}), UserController.authenticate);


module.exports = router;