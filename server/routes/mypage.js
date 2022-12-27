var express = require('express');
const {showinfo,disconnect, userInfo} = require("./../controller/mypageController.js");
var router = express.Router();

router.get('/',showinfo);

// router.get('/',disconnect);

router.post("/userInfo", userInfo);

module.exports = router;