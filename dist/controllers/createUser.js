"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const user_1 = __importDefault(require("../models/user"));
const projectId = "661b17adef4a593cad14a2cb";
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, profilePicture, token } = req.body;
    const existingUser = yield user_1.default.findOne({ email });
    if (existingUser)
        return res.status(400).json({ error: "User with this email already exists" });
    const newUser = yield user_1.default.create({ username, email, password, profilePicture, token });
    try {
        const addToProjectList = yield axios_1.default.put(`${process.env.PROJECT_MANAGER_URL}/projects/${projectId}`, { newUser });
        const response = {
            message: `this user ${newUser.email} is registered and saved to Project users list`,
            user: { userId: newUser.id, username, email, profilePicture },
        };
        if (addToProjectList.status !== 200) {
            response.message = "this user ${newUser.email} is registered but not saved to Project users list";
        }
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.default = createUser;
