const execute = require("./../database/ExecuteQuery")
const query = require("./../database/Query");


module.exports = {
    // 회원가입
    signup : async (req,res) => {
        const address = req.body.user_address;
        const nickname = req.body.nickname;
        
        let result = await execute(query.GET_USER, address);
        if (result) {
            if(result[0].length === 0 ) {
                console.log('insert user');
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
            res.status(500).send("ERROR");
        }
    }
}