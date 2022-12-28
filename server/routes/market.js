var express = require('express');
var router = express.Router();

var {market} = require("../controller/marketController")

router.get('/', market);
router.get('/trending', market);
router.get('/art', market);
router.get('/collectibles', market);


module.exports = router;