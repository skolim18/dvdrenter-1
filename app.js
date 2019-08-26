const express = require("express");
const bodyParser = require("body-parser");
//const dotenv = require('dotenv');
//dotenv.config();
const db = require('./database/mongo');
const userRouter = require('./routes/users');
const dvdsRouter = require('./routes/dvds');
const authMiddleware = require('./middlewares/auth').authMiddleware;
const port = require('./config').port

const app = express();


app.get("/", (req, res, next) => {
    res.send(console.log("hello world"));
})
app.use(bodyParser.json());
app.use('/users', userRouter);
app.use(authMiddleware);
app.use('/dvds', dvdsRouter);

app.use((req, res, next) => res.status(404).send("not found!"));
//const port = process.env.port;


db.initDbConnection(() => app.listen(port, () => console.log(`Hello, ${port}`)));