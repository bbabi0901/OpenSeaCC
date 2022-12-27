const path = require("path");
const execute = require("../database/ExecuteQuery");
const query = require("../database/Query")


module.exports = {
    showinfo: (req,res) => {
        res.sendFile(path.join(__dirname + "../../../client/build/index.html"));
    },

    disconnect: (req,res) => {
        res.send("지갑 연결 해제 하는 창....?");
    },

    userInfo : async (req, res) => {

        const address = req.body.address;
        
        const userResult = await execute(query.GET_USER, address);

        const nftResult = await execute(query.GET_NFT, address);
        
        return res.send(nftResult);
    }
}