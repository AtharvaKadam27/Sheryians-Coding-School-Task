import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import connectDB from "./src/connection/db.js";

connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
