const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const path = require("path");
const http = require("http");
const cors = require("cors");
const app = express();

const server = http.createServer(app);
var port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// const PORT = process.env.PORT || 5000;
server.listen(port, console.log(`Server running ${port} `));
