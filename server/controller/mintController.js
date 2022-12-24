const execute = require("./../database/ExecuteQuery")


module.exports = {
    mint : async (req, res) => {
        const result = await execute("SELECT * FROM user;");
        if (result) {
            res.send(result[0]);
        } else {
            res.send('Mint 미구현 페이지 입니다.');
        }
    },
    mintDetail : (req, res) => {
        res.send("Mint Detail 미구현 페이지 입니다.");
    }
}