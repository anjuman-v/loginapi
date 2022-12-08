require("dotenv").config()
const express = require("express");

const {register, login} = require("./controllers/auth.controller")

const cors = require("cors");

const connect = require("./configs/db");

const port = 8080;

const app = express();

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000", 
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true 
     })
  );
  

app.get("/", function(req, res) {
    res.send("hello");
})

app.post("/register", register); 
app.post("/login", login);


app.listen(port, async function (){
    await connect();
    console.log(`listening on port ${port}`);
})