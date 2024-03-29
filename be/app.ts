import { dbConfig } from "./src/config/db.config";
import * as express from "express";
import * as cors from "cors";
import examRoute from "./src/route/exam.route";

const port = 8080;

dbConfig
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/exam", examRoute);

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
