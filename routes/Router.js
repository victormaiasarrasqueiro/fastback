const express = require('express');

const TokenValidate = require('../validate/TokenValidate');
const UserValidate = require('../validate/UserValidate');
const PasswordRecoveryValidate = require('../validate/PasswordRecoveryValidate');
const LogValidate = require('../validate/LogValidate');

const TokenController = require('../controllers/TokenController');
const UserController = require('../controllers/UserController');
const PasswordRecoveryController = require('../controllers/PasswordRecoveryController');
const LogController = require('../controllers/LogController');

const router = express.Router({ mergeParams: true });

/* POST */
router.post('/token', TokenValidate.post, TokenController.post);

/* POST */
router.post('/user', UserValidate.post, UserController.post);

/* POST */
router.post('/password/recovery', PasswordRecoveryValidate.post, PasswordRecoveryController.post);

/* POST */
router.post('/log', LogValidate.post, LogController.post);

/* GET */
router.get('/log', LogController.get);

module.exports = router;
