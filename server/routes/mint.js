var express = require('express');
var router = express.Router();
const {minting, mintDetail} = require("./../controller/mintController");
const path = require("path");
const fs = require('fs');




router.get('/', async function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});


router.post('/minting', minting) ;
// router.post('/minting', function(req, res, next) {
//     const time = Date.now();
//     const img = req.body.img;
//     const address = req.body.address;
//     const info = req.body.info;
    
//     console.log(address)
//     console.log(info)
    
//     const name = time + "_" + address

//     const fullnm = `${name}.jpg`;


//     fs.writeFileSync(path.join(__dirname, `../../data/${fullnm}`), img[0].replace(/^data:image\/jpeg;base64,/, ""), "base64");

//     res.send("")
// });

router.get("/detail", mintDetail);

module.exports = router;