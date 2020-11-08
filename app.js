import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { localsMiddleware } from './middlewares';
import routes from "./routes"
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import contentSecurityPolicy from 'helmet/dist/middlewares/content-security-policy';

const app = express();

app.set('view engine', "pug")
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(
    helmet({ contentSecurityPolicy: { directives: { defaultSrc: ["*"] } } })
  );

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;