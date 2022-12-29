const execute = require("./../database/ExecuteQuery")
const query = require("./../database/Query");
const {AddChain} = require("./../utils/minting");
const path = require("path");
const fs = require('fs');

module.exports = {
    // 민팅 메소드
    minting : async (req,res) => {
        const time = Date.now();
        const img = req.body.img;
        const address = req.body.address;
        let info = req.body.info;

        const name = time + "_" + address;

        const fullnm = `${name}.jpg`;

        const resultToken = await AddChain(fullnm, address);
        
        info = JSON.parse(info)

        fs.writeFileSync(path.join(__dirname, `../../data/${fullnm}`), img[0].replace(/^data:image\/jpeg;base64,/, ""), "base64");

        await execute(query.INSERT_NFT, [address, address, info.nft_name, info.nft_detail, info.nft_collection, fullnm, info.nft_price, resultToken])

        return res.send({"data":fullnm}).end();
    },

    mintDetail : async (req, res) => {
        const id = req.query.id;
        console.log(id)
        // const usr = await execute(query.GET_USER, address);

        const nft = await execute(query.GET_NFT_BY_ID, id);

        if (nft) {
            return await res.send(nft[0][0])

        } else {
            return await res.send({data:"fail"})
        }
    }
}