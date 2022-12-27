const query = {
    "GET_USER":"SELECT * FROM user WHERE user_address = ?;",
    "INSERT_USR":"INSERT INTO user (user_address, user_nickname, reg_dt) VALUES (?, ?, NOW());",
    "GET_NFT_BY_ADDRESS" : "SELECT * FROM nft WHERE owner_address = ?;",
    "INSERT_NFT" : `
        INSERT INTO nft 
        (
            creator_address, 
            owner_address,
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

    `,
    "SELECT_LIMIT_10P" : `
        SELECT * from nft n 
        WHERE reg_dt <= ?
        order by reg_dt DESC 
        limit 10
        ;
    `,
    "GET_NFT_BY_ID" : "SELECT * FROM nft WHERE id = ?;"
};

module.exports = query;