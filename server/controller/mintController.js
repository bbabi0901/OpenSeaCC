const execute = require("./../database/ExecuteQuery")
const query = require("./../database/Query");
const path = require("path")

module.exports = {
    // 민팅 메소드
    minting :async (req,res) => {
        const user_address = req.body.user_address;
        const nft_address = req.body.nft_address;
        const image = req.body.image;
        const name = req.body.nft_name;
        const nft_detail = req.body.nft_detail;
        const nft_price = req.body.nft_price;

        if (!(user_address && nft_address && image && name && nft_price)) {
            return await res.status(500).send("not enough").end();
        }

        return await res.status(202).send("success").end();
    
    },
    mintDetail : (req, res) => {
        res.send("Mint Detail 미구현 페이지 입니다.");
    }
}