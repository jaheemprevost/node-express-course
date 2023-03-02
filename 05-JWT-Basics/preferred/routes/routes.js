const express = require('express');
const router = express.Router();

const {logon, hello} = require('../controllers/controllers');

const authMiddleware = require('../middleware/auth-middleware');

router.route('/logon').post(logon);
router.route('/hello').get(authMiddleware, hello);

module.exports = router;
