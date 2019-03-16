import express from "express";
import config from "./config";

const app = express();

config(app);

app.get('/', function (req, res) {
    res.send('Hello World!!!');
});

app.set("port", process.env.PORT || 3000);

export default app;
