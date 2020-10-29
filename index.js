import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 10000;

const handlelistening = () => console.log(`localhost:${PORT}접속`);


const handleHome = (req, res) => res.send('Hello from home');

const handleProfile = (req, res) => res.send("you are on my profile");

const betweenHome = (req, res, next) => {
    console.log("I'm between");
    next();
}
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("tiny"));
app.use(helmet());

app.get("/",handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handlelistening);
