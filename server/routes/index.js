var express = require('express');
var router = express.Router();
const execute = require("./../database/ExecuteQuery")

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.get("/mainList", async function (req, res, next) {
  let point = req.query.point
  let result;
  if (point && point > 0) {
    result = await execute("SELECT * FROM nft where id > ? limit 10;", point*10)
  } else {
    result = await execute("SELECT * FROM nft where id > ? limit 10;", 0)
  }
  if (result) {
    return res.send(result[0])
  } else {
    return res.send("fail")
  }
})

module.exports = router;
