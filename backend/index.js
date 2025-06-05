import express, { json } from "express";
import userRouter from "./routes/user.route.js";
import pinRouter from "./controllers/pin.controller.js";
import commentRouter from "./controllers/comment.controller.js";
import boardRouter from "./controllers/board.controller.js";
import connectDb from "./utils/connectDB.js";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/pins", pinRouter);
app.use("/comments", commentRouter);
app.use("/board", boardRouter);

app.listen(3000, () => {
  connectDb();
  console.log(`Server is running http://localhost:3000`);
});
