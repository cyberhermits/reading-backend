import express from "express";
import dotenv from "dotenv";


dotenv.config({ path: ".env.example" });

const app = express();

app.set("port", process.env.PORT || 3000);

export default app;
