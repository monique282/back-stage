import cors from "cors";
import dotenv from "dotenv";
import express, { json, Request, Response } from "express";
import "express-async-errors";
import httpStatus from "http-status";
import { UserRoute } from "./routes/userRoute";
import errorHandlingMiddleware from "./middlewares/errorHandlingMiddleware";
import { TreeRoute } from "./routes/treeRoute";


dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app
    .get("/health", (req: Request, res: Response) => {
        return res.status(httpStatus.OK).send("Ok running! ");
    })
    .use("/user", UserRoute)
    .use("/tree", TreeRoute)


app.use(errorHandlingMiddleware);


export default app;