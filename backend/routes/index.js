var path = require('path');
var express = require('express');
var router = express.Router();
router.get('*', function (req, res, next) {
  res.sendFile(path.resolve('./dist/index.html'));
});
module.exports = router;
