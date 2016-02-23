var express = require('express');
var router = express.Router();

router.get('/leslie/fish/:name/:from', function(req, res, next) {

  var param_name = req.params.name;
  // var capital_name = param_name.charAt(0).toUpperCase() + param_name.slice(1);

  var sender = req.params.from;
  // var capital_sender = sender.charAt(0).toUpperCase() + sender.slice(1);

  res.render('compliment', {
    compliment: param_name + ', you beautiful tropical fish. You’re smart as a whip and you’re cool under pressure.',
    from: sender
  });
});

router.get('/pg/:name/:from', function(req, res, next) {

  var param_name = req.params.name;
  var sender = req.params.from;

  res.render('compliment', {
    compliment: param_name + ', your hear is as warm as my mother\'s freshly baked banana bread.',
    from: sender
  });
});

router.get('/elf/:name/', function(req, res, next) {

  var param_name = req.params.name;

  res.render('compliment', {
    compliment: 'You have such a pretty face ' + param_name + ', you should be a on a Christmas card!',
    from: 'Buddy the Elf'
  });
});

router.get('/zoolander/:from/', function(req, res, next) {

  var sender = req.params.from

  res.render('compliment', {
    compliment: 'I friggin\' worship you, man!',
    from: sender
  });
});

module.exports = router;
