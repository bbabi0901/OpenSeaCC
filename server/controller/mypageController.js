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
        console.log(req.body)
        const creatorNFT = await execute(query.GET_NFT_LIST_FROM_CREATOR, address);
        const ownerNFT = await execute(query.GET_NFT_LIST_FROM_OWNER, address);
        
        let result = {};
        if (creatorNFT) {
            
            result.creator = creatorNFT[0];
        }

        if (ownerNFT) {
            result.owner = ownerNFT[0];
        }

        return res.send(result);
    }
}