console.log(result)
module.exports = {
    port: process.env.port,
    dbconn: process.env.dbconnection
}
/*
if (result.error) {
    throw result.error;
}

const { parsed: env } = result;
module.exports = env;
*/