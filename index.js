const express = require("express");
const app = express();

const PORT = 10000;

function handlelistening() {
  console.log(`localhost:${PORT}접속`);
}

app.listen(PORT, handlelistening);
