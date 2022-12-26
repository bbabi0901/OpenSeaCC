const execute = require("./../database/ExecuteQuery")
const query = require("./../database/Query");


module.exports = {
    // 회원가입
    signup : async (req,res) => {
        try {
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
            }
            else {
                res.send("구현이 안됐어엉");
            }
        }
        catch (err) {
            res.send(err);
        }
    }
}