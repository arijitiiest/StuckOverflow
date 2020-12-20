import express, { Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import * as dotenv from "dotenv";

import apiRoutes from "./routes/api";
import { connect } from "./utils/db";

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const PORT = process.env.PORT || 5000;

(async () => {
  const app = express();

  await connect();

  app.use(cors());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.use("/media", express.static(path.join(__dirname , "media")))

  app.use(express.static(path.join(__dirname, "..", "client", "build")));
  app.use("/", (_, res: Response) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
  });
})();
