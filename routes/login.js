var express = require('express');
var sessions = require('../middleware/sessions');
var controller = require('../controllers/users');

var app = express();
var router = express.Router();

var get;
router.get('/', get = (req, res) => {
  controller.getLogin(req, res);
});
var post;
router.post('/', sessions.authenticate(), post = (req, res) => {
  controller.login(req, res);
});
var logout;
router.get('/logout', logout = (req, res) => {
  controller.logout(req, res);
});

module.exports = router;
