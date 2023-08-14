import { log } from "console";
import express, { Express, Request, Response } from "express";


const app: Express = express();


app.get("/", (req: Request, res: Response) => {
    res.send("<Express + Typescript Server>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
});