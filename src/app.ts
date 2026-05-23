import express, { type Application, type Request, type Response } from "express";
import globalErrorHandler from "./middleware/globelErrorHandler.js";
import { userRoute } from "./modules/auth/auth.route.js";
import { issuesRoute } from "./modules/issues/issues.route.js";

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "DevPulse Server Running",
    author: "Ayas Ibrahim",
  });
});

app.use("/api/auth", userRoute);
app.use("/api/issues", issuesRoute);

app.use(globalErrorHandler);

export default app;