var express = require('express');
var router = express.Router();
const {minting, mintDetail} = require("./../controller/mintController");
const path = require("path");

router.get('/', async function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

router.post('/', minting);

router.get("/detail", mintDetail);

module.exports = router;