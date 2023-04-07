var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/year', (req, res) => {
  var aujd = new Date();
  var year = aujd.getFullYear();
  res.json({ year });
 });


module.exports = router;
