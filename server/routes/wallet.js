var express = require('express');
const {signup} = require("./../controller/walletController.js");
var router = express.Router();

router.post('/',signup);

module.exports = router;