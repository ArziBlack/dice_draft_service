import express, { Application, json } from "express";
import { log } from "console";
import { PORT } from "./config";
import index from "./routes/index"
import { error_handler } from "./middleware/error_handler";

if (!PORT)
{
    process.exit(1);
}

const app: Application = express();

app.use(json());

app.use(error_handler);

app.use("/api", index)

log("test server started... and OK")
app.listen(PORT, ()=> {
    console.log(`server started on port ${PORT}`);
});