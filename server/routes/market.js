var express = require('express');
var router = express.Router();

var {market, market_trending, market_art, market_collectibles} = require("../controller/marketController")

router.get('/', market);
router.get('/trending', market_trending);
router.get('/art', market_art);
router.get('/collectibles', market_collectibles);


module.exports = router;