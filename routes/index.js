var express = require('express');
var router = express.Router();

var prepend = process.env.NODE_ENV == 'development' ?
  "http://localhost:10204" : "/dist" ;
var style = prepend + "/style.css";
var javascript = prepend + "/bundle.js";

var page_ = {
  javascript: javascript,
  style: style
};

/* GET home page. */
router.get('/', function(req, res, next) {
  var page__ = page_;
  page__.title = 'Express'
  res.render('index', page__);
});

module.exports = router;
