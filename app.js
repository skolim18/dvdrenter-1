const express = require("express");
const bodyParser = require("body-parser");

const db = require('./database/mongo');
const userRouter = require('./routes/users');
const dvdsRouter = require('./routes/dvds');
const authMiddleware = require('./middlewares/auth').authMiddleware;

const app = express();

app.use(bodyParser.json());
app.use('/users', userRouter);
app.use(authMiddleware);
app.use('/dvds', dvdsRouter);

app.use((req, res, next) => res.status(404).send("not found!"));

db.initDbConnection(() => db.seedDb(() => app.listen(9090, () => console.log("Hello, 9090"))));