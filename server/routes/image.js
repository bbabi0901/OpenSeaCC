var express = require('express');
var router = express.Router();
const path = require("path");

router.get('/', async function(req, res, next) {
    const file = req.query.path;
    res.sendFile(path.join(__dirname + "../../../data/" + file));
});

module.exports = router;

// http://localhost:3000/images?path={파일 이름}