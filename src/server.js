import express from "express";
import cors from "cors"
import router from "./routes/routes.js";
import dotenv from "dotenv"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});