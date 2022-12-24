const pool = require("./MySQL");


// 쿼리 실행 함수
async function execute(query, param) {

    let conn;
    try {
        conn = await pool.getConnection(async conn => conn);
        
        await conn.beginTransaction();
    
        // 쿼리 실행 후 결과물 반환
        const res = await conn.query(query, param).then((res) => {
            return res;
        });

        // 쿼리결과에 따라 true/false 반환
        if (res) {
            return res;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    } finally {
        if (conn != undefined) {
            // conn이 정상적으로 커넥션을 받아 왔다면 반환
            conn.release();
        }
    }

}

module.exports = execute;