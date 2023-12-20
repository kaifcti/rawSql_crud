const express = require("express");
const bodyParser = require("body-parser");
require("./database/connection")
const userRouter = require("./routers/userRouter")

const app = express();
const cors = require("cors");

app.use(cors());
// app.use(express.json());

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*", "http://localhost:3000", {
        reconnect: true,
    });
    res.header("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type,Accept, X-Custom-Header,Authorization"
    );
    res.setHeader("Content-Type", "text/plain");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    } else {
        return res.send({ success: "0", message: "Hello World" });
    }
});


app.use("/v1", userRouter)




app.listen(3001, function () {
    console.log("Node app is running on port 3001");
});

module.exports = app;



