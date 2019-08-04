import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as mongoose from "mongoose";
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3001);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));

// Use routes
app.use("/", index);

//Connect to mongo
const mongoDB: string = "mongodb://localhost/StoreDb";
mongoose
  .connect(mongoDB, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => console.log("connect to mongo"))
  .catch(() => console.log("faild to connect to mongo"));
  
app.use(errorNotFoundHandler);
app.use(errorHandler);
