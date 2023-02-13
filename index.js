import express from "express";
import { Port } from "./config.js";
import movieRoute from "./routes/movie.js";
import adminRoute from "./routes/admin.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());


app.use("/movie", movieRoute)
app.use("/admin", adminRoute)
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
