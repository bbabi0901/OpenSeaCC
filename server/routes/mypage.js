var express = require('express');
const {showinfo,disconnect} = require("./../controller/mypageController.js");
var router = express.Router();

router.get('/',showinfo);

router.get('/',disconnect);

module.exports = router;