const dbConn = require('../config').dbconn;
console.log(dbConn)
const dbConfig = {
    url: dbConn,
    options: {}
}

module.exports = dbConfig;