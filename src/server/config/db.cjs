const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config()

// create connection to database
// the mysql.createConnection function takes in a configuration object

exports.connect = () => {
  const pool = mysql.createPool({
    host: global.config.DATABASE_HOST,
    user: global.config.DATABASE_USERNAME,
    password: global.config.DATABASE_PASSWORD,
    database: global.config.DATABASE_NAME,
    port: global.config.MYSQL_PORT,
    connectionLimit: 10
  })

  global.pool = pool
}
