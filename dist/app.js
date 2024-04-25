"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const connectDB_1 = __importDefault(require("./libs/connectDB"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 9050;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/users", userRoute_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to Nuble Authentication!');
});
app.listen(PORT, () => {
    const message = [`\n\t✅\u001b[1m Server is Running at\u001b[0m`, `\x1b[34mhttp://localhost:${PORT}\x1b[0m\n`];
    (0, connectDB_1.default)();
    console.log(...message);
});
