const execute = require('../database/ExecuteQuery');
const query = require('../database/Query');
const path = require("path")

module.exports = {
    market : async (req, res) => {
        const category = req.query.category;
        console.log(category)

        if (category == undefined || category == null) {
            return res.sendFile(path.join(__dirname + "../../../client/build/index.html"));
        }
        const result = await execute(query.SELECT_CATEGORY, category);

        if (result) {
            return res.send({data:result[0]})
        } else {
            return res.send({data:"fail"});
        }
    },
    market_trending : async(req, res) => {
        const result = await execute(query.SELECT_CATEGORY, "trending");
        console.log(result[0])
        if (result) {
            return res.send({data:result[0]})
        } else {
            return res.sendFile(path.join(__dirname + "../../../client/build/index.html"));
        }
    },
    market_art : async(req, res) => {
        const result = await execute(query.SELECT_CATEGORY, "art");
        console.log(result[0])
        if (result) {
            return res.send({data:result[0]})
        } else {
            return res.sendFile(path.join(__dirname + "../../../client/build/index.html"));
        }
    },
    market_collectibles : async(req, res) => {
        const result = await execute(query.SELECT_CATEGORY, "collectibles");
        console.log(result[0])
        if (result) {
            return res.send({data:result[0]})
        } else {
            return res.sendFile(path.join(__dirname + "../../../client/build/index.html"));
        }
    }
}

// trending
// art
// collectibles