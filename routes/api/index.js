const router = require('express').Router();
const userRoutesEx = require('./user-routes');
const thoughtRoutesEx = require('./thought-routes');

// add users and thoughts to the beginning of their respective routes
router.use('/users', userRoutesEx);
router.use('/thoughts', thoughtRoutesEx);

module.exports = router;