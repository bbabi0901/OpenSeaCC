const query = {
    "GET_USER":"SELECT * FROM user WHERE user_address = ?;",
    "INSERT_USR":"INSERT INTO user (user_address, user_nickname, reg_dt) VALUES (?, ?, NOW());",
    "GET_NFT" : "SELECT * FROM nft WHERE user_address = ?;"
};

module.exports = query;