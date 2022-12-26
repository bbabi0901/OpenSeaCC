const execute = require("./../database/ExecuteQuery")
const query = require("./../database/Query");

module.exports = {
    mint : async (req, res) => {
        const address = req.query.user_address;
        const nickname = req.query.nickname;

        console.log(address)
        console.log(nickname)
        let result = await execute(query.GET_USER, address);
        if (result) {

            if(result[0].length === 0 ) {
                console.log('insert user')
                result = await execute(query.INSERT_USR, [address, nickname]);
                if(result) {
                    res.send(result)
                } else {
                    res.send("not enough")
                }
            } else {
                res.send(result[0]);    
            }

        } else {
            res.send('Mint 미구현 페이지 입니다.');
        }
    },
    mintDetail : (req, res) => {
        res.send("Mint Detail 미구현 페이지 입니다.");
    }
}