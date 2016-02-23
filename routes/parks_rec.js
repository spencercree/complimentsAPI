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

router.get('/moth/:name/:from', function(req, res, next) {

  var param_name = req.params.name;
  var sender = req.params.from;

  res.render('compliment', {
    compliment: 'Oh, ' + param_name + ', you beautiful, rule-breaking moth.',
    from: sender
  });
});

router.get('/ox/:name/:from', function(req, res, next) {

  var param_name = req.params.name;
  var sender = req.params.from;

  res.render('compliment', {
    compliment: param_name + ', you are such a good friend, you\'re a beautiful, talented, brilliant, powerful musk-ox. Thank you, ox.',
    from: sender
  });
});

router.get('/unicorn/:name/:from', function(req, res, next) {

  var param_name = req.params.name;
  var sender = req.params.from;

  res.render('compliment', {
    compliment: param_name + ', you know that I fully support any woman\'s decision, especially a beautiful unicorn nurse like yourself, in creating the family that she wants. But you are so brilliant and kind and stupid hot, you\'re definitely going to find a wonderful guy who loves you and respects you and fills your home with multiethnic genius babies.',
    from: sender
  });
});

module.exports = router;


