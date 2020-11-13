const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/register', ctrl.auth.register);
router.get('/login', ctrl.auth.login);
router.delete('/logout', ctrl.auth.logout);

module.exports = router;