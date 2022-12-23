var express = require('express');
var router = express.Router();
const {mint, mintDetail} = require("./../controller/mintController");

router.get('/', mint);

router.get("/detail", mintDetail)

module.exports = router;