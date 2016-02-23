var express = require('express');
var router = express.Router();

router.get('/pg/:name/:from', function(req, res, next) {

  var param_name = req.params.name;
  var sender = req.params.from;

  res.render('compliment', {
    compliment: param_name + ', your heart is as warm as my mother\'s freshly baked banana bread.',
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

  var sender = req.params.from;

  res.render('compliment', {
    compliment: 'I friggin\' worship you, man!',
    from: sender
  });
});

router.get('/groundhog/:name/:from', function(req, res, next) {

  var param_name = req.params.name;
  var sender = req.params.from;

  res.render('compliment', {
    compliment: param_name + ' you like boats, but not the ocean. You go to a lake in the summer with your family up in the mountains. There\'s a long wooden dock and a boathouse with boards missing from the roof, and a place you used to crawl underneath to be alone. You\'re a sucker for French poetry and rhinestones. You\'re very generous. You\'re kind to strangers and children, and when you stand in the snow you look like an angel.',
    from: sender
  });
});

module.exports = router;


