const execute = require('../database/ExecuteQuery');
const query = require('../database/Query');
const path = require("path")

module.exports = {
    market : async (req, res) => {
        const category = req.query.category;

        if (category == undefined || category == null) {
            res.sendFile(path.join(__dirname + "../../../client/build/index.html"));
        }
        const result = await execute(query.SELECT_CATEGORY, category);

        if (result) {
            res.send({data:result[0]})
        } else {
            res.send({data:"fail"});

        }
    }
}