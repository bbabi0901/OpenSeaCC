const mysql = require('mysql2/promise');

// mysql 커넥션 풀 생성
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'project1',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function DBInit() {
    // 디비 생성
    await pool.query("CREATE DATABASE if not exists project1");
    // 테이블 생성

    await pool.query(`
    CREATE TABLE if not exists user
    (
        id int NOT NULL AUTO_INCREMENT,
        user_address varchar(255),
        user_nickname varchar(255),
        user_password varchar(255),
        PRIMARY KEY (id)
    )
    ;
    `);
}

DBInit();

module.exports = pool;