const execute = require("./../database/ExecuteQuery")
const query = require("./../database/Query");
const path = require("path")
const fs = require('fs');

module.exports = {
    // 민팅 메소드
    minting :async (req,res) => {
        const time = Date.now();
        const img = req.body.img;
        const address = req.body.address;
        const info = req.body.info;
        
        const name = time + "_" + address

        const fullnm = `${name}.jpg`;

        fs.writeFileSync(path.join(__dirname, `../../data/${fullnm}`), img[0].replace(/^data:image\/jpeg;base64,/, ""), "base64");

        execute(query.INSERT_NFT, [address, "", info.nft_name, info.nft_detail, fullnm, info.nft_price])

        res.send("")
    },
    mintDetail : (req, res) => {
        res.send("Mint Detail 미구현 페이지 입니다.");
    }
}