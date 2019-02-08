var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render(
    'about', 
    { 
      title: 'about',
      name: '네입aa'
    });
});

module.exports = router;
