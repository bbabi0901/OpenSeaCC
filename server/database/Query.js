const query = {
    "GET_USER":"SELECT * FROM user WHERE user_address = ?;",
    "INSERT_USR":"INSERT INTO user (user_address, user_nickname, reg_dt) VALUES (?, ?, NOW());",
    "GET_NFT" : "SELECT * FROM nft WHERE user_address = ?;",
    "INSERT_NFT" : `
        INSERT INTO nft 
        (
            user_address, 
            nft_address,
            nft_name,
            nft_detail,
            nft_image,
            nft_price,
            reg_dt,
            upt_dt
        )
        VALUES
        (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            NOW(),
            NOW()
        );

    `
};

module.exports = query;