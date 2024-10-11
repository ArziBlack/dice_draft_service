import { PORT } from "./config";
import index from "./routes/index"
import { connectDB } from "./config/db";
import express, { Application, json } from "express";
import { error_handler } from "./middleware/error_handler";

connectDB();

if (!PORT)
{
    process.exit(1);
}

const app: Application = express();

app.use(json());

app.use(error_handler);

app.use("/api/v1", index);

app.listen(PORT, ()=> {
    console.log(`server started on port ${PORT}`);
});