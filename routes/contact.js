var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
});

module.exports = router;
