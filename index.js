import express from "express"

const app = express();

const PORT = 10000;

const handlelistening = () => console.log(`localhost:${PORT}접속`);


const handleHome = (req, res) => res.send('Hello from home')

const handleProfile = (req, res) => res.send("you are on my profile")

app.get("/", handleHome) 

app.get("/profile", handleProfile)

app.listen(PORT, handlelistening);
