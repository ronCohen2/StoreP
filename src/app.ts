import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { Admin } from "./routes/AdminRoutes";
import { Products } from "./routes/ProductsRoute";
import { Auth } from "./routes/AuthRoutes";
import { Cart } from "./routes/CartRoute";

// Create Express server
export const app = express();
const port = process.env.PORT || 3001;
if (process.env.NODE_ENV === "production") {
  app.use(express.static(`../../client/build`));
  app.get("*", (req: any, res: any) => {
    res.sendFile(
      path.resolve(__dirname, "../../client/build", "build", "index.html")
    );
  });
}
// Express configuration
// app.set("port", process.env.PORT || 3001);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//
app.use(cors());

// parse application/json
app.use(bodyParser.json());
app.use(logger("dev"));

// app.use(express.static(path.join(__dirname, "../public")));

// Use routes
app.use("/admin", Admin);
app.use("/Products", Products);
app.use("/Auth", Auth);
app.use("/Cart", Cart);

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
app.listen(port, () => {
  console.log(`Server is starting at PORT: ${port}`);
});
