require("dotenv").config()
const express = require("express");

const {register, login} = require("./controllers/auth.controller")


const connect = require("./configs/db")

const app = express();

app.use(express.json());


app.get("/", function(req, res) {
    res.send("hello");
})

app.post("/register", register); 
app.post("/login", login);


app.listen(process.env.SERVER_PORT, async function (){
    await connect();
    console.log(`listening on port ${process.env.SERVER_PORT}`);
})