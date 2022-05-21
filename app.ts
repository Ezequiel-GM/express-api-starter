import "dotenv/config";
import express, { Request, Response } from "express";

import { router } from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(router);

// 404 route
app.use((_: Request, res: Response) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
