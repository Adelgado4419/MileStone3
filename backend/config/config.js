require('dotenv').config()

module.exports = {
  development: {
    username: "postgres",
    password: "Y4na8EstEs$",
    database: "postgres",
    host: "db.cxjotagktppfnwfypixu.supabase.co",
    dialect: "postgres",
    logging: true,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host:  process.env.DB_HOST,
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,  
    dialect: "postgres"
  }
}
