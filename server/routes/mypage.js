var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('미구현 페이지 입니다.');
});

module.exports = router;