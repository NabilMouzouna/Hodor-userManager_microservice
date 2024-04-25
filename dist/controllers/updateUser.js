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
const bcryptjs_1 = require("bcryptjs");
const user_1 = __importDefault(require("../models/user"));
const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, profilePicture } = req.body;
        const salt = (0, bcryptjs_1.genSaltSync)(10);
        const hashedPassword = (0, bcryptjs_1.hashSync)(password, salt);
        const User = yield user_1.default.findByIdAndUpdate(req.params.userId, { username, email, password: hashedPassword, profilePicture });
        const response = {
            message: "user information are updated successfully",
            user: { userId: User.id, username: User.username, email: User.email, profilePicture: User.profilePicture || "" }
        };
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.default = updateUserById;
