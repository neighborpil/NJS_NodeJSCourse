var express = require('express');
var router = express.Router();
var jd  = require("../files/jdata.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: '이수프레두',
      name: '네입',
      jdata: jd
    });
});

module.exports = router;
