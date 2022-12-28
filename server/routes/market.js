var express = require('express');
var router = express.Router();

var {market} = require("../controller/marketController")

router.get('/', market);

module.exports = router;