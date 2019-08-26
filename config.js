
module.exports = {
    port: process.env.PORT,
    dbconn: process.env.dbconnection
}
/*
if (result.error) {
    throw result.error;
}

const { parsed: env } = result;
module.exports = env;
*/