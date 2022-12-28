const execute = require('../database/ExecuteQuery');
const query = require('../database/Query');

module.exports = {
    market : async (req, res) => {
        const category = req.query.category;
        const result = await execute(query.SELECT_CATEGORY, category);

        if (result) {
            res.send({data:result[0]})
        } else {
            res.send({data:"fail"});

        }
    }
}