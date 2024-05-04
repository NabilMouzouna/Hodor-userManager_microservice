import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import connectDB from './libs/connectDB';
import userRoute from "./routes/userRoute"

config();

// Variables
const app: Express = express();
const PORT = process.env.PORT || 9050;

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/users", userRoute)


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Nuble Authentication!');
});

app.listen(PORT, () => {
  const message = [`\n\t✅\u001b[1m Server is Running at\u001b[0m`, `\x1b[34mhttp://localhost:${PORT}\x1b[0m\n`];
  connectDB();
  console.log(...message);
});
