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
    compliment: param_name + ', you have such a pretty face, you should be a on a Christmas card!',
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

router.get('/strings/:from', function(req, res, next) {
  var sender = req.params.from;

  res.render('compliment', {
    compliment: 'You give me premature ventricular contractions.',
    from: sender
  });
});

router.get('/lotr/:from', function(req, res, next) {
  var sender = req.params.from;

  res.render('compliment', {
    compliment: 'I would rather spend one lifetime with you than face all the Ages of this world alone.',
    from: sender
  });
});

router.get('/dd/:from', function(req, res, next) {
  var sender = req.params.from;

  res.render('compliment', {
    compliment: 'Me? I\'m scared of everything. I\'m scared of what I saw, I\'m scared of what I did, of who I am, and most of all I\'m scared of walking out of this room and never feeling the rest of my whole life the way I feel when I\'m with you.',
    from: sender
  });
});

router.get('/harry/:from', function(req, res, next) {
  var sender = req.params.from;

  res.render('compliment', {
    compliment: 'I love that you get cold when it\'s 71 degrees out. I love that it takes you an hour and a half to order a sandwich. I love that you get a little crinkle above your nose when you\'re looking at me like I\'m nuts. I love that after I spend the day with you, I can still smell your perfume on my clothes. And I love that you are the last person I want to talk to before I go to sleep at night. And it\'s not because I\'m lonely, and it\'s not because it\'s New Year\'s Eve. I came here tonight because when you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.',
    from: sender
  });
});

router.get('/wethot/:name/:from', function(req, res, next) {
  
  var param_name = req.params.name;
  var sender = req.params.from;

  res.render('compliment', {
    compliment: 'When we first started hanging out together, this morning, we were just friends; but things change, and I\'ve fallen in love with you. I just know that if you gave me a chance, I could make you feel so good. So I am coming, not as your buddy, and not as a co-counselor, but for the first time as a man - a man who loves a woman, and who wants to hold her and provide for her and, yes, have sex with her; but no, seriously, ' + param_name + ', I love the way you laugh and I love the way your hair smells and I love it that sometimes for no reason you\'re late for school, and I don\'t care that you\'re bowlegged and I don\'t care that you\'re bilingual - all I know is that I would have said no to every single person on your list because I\'ve always wanted you.',
    from: sender
  });
});

router.get('/napoleon/:from', function(req, res, next) {
  var sender = req.params.from;

  res.render('compliment', {
    compliment: 'I see you\'re drinking 1%. Is that \'cause you think you\'re fat? \'Cause you\'re not. You could be drinking whole if you wanted to.',
    from: sender
  });
});


router.get('/charade/:name/:from', function(req, res, next) {

  var param_name = req.params.name;
  var sender = req.params.from;

  res.render('compliment', {
    compliment: 'Do you know what\'s wrong with you, ' + param_name + '? Nothing!',
    from: sender
  });
});


module.exports = router;


