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
            category,
            nft_image,
            nft_price,
            token_id,
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
    "GET_NFT_BY_ID" : "SELECT * FROM nft WHERE id = ?;",
    "GET_NFT_LIST_FROM_CREATOR":"SELECT * FROM nft WHERE creator_address = ?;",
    "GET_NFT_LIST_FROM_OWNER":"SELECT * FROM nft WHERE owner_address = ?;",
    "SELECT_CATEGORY" : "SELECT * FROM nft WHERE category = ?"
};

module.exports = query;