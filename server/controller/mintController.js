const execute = require("./../database/ExecuteQuery")
const query = require("./../database/Query");
const path = require("path")
const fs = require('fs');

module.exports = {
    // 민팅 메소드
    minting : async (req,res) => {
        const time = Date.now();
        const img = req.body.img;
        const address = req.body.address;
        const info = req.body.info;
        
        const name = time + "_" + address

        const fullnm = `${name}.jpg`;

        fs.writeFileSync(path.join(__dirname, `../../data/${fullnm}`), img[0].replace(/^data:image\/jpeg;base64,/, ""), "base64");

        execute(query.INSERT_NFT, [address, "", info.nft_name, info.nft_detail, fullnm, info.nft_price])

        res.send({"data":fullnm}).end()
    },

    mintDetail : async (req, res) => {
        const id = req.query.id;
        console.log(id)
        // const usr = await execute(query.GET_USER, address);

        const nft = await execute(query.GET_NFT_BY_ID, id);

        if (nft) {
            const nftResult = nft[0];
            const address = nftResult;
            // const usr = await execute(query.GET_USER, address);

            const result = {
                user_address : address,
                nft_name : nftResult.nft_name,
                discription : nftResult.nft_detail,
                nft_image : nftResult.nft_image,
                nft_price : nftResult.nft_price
            }
            return await res.send(result)

        } else {
            return await res.send({data:"fail"})
        }
    }
}