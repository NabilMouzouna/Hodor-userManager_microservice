"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deleteUser_1 = __importDefault(require("../controllers/deleteUser"));
const createUser_1 = __importDefault(require("../controllers/createUser"));
const getAllUsers_1 = __importDefault(require("../controllers/getAllUsers"));
const updateUser_1 = __importDefault(require("../controllers/updateUser"));
const router = (0, express_1.Router)();
router.get('/:userId', getAllUsers_1.default);
router.put('/:userId', updateUser_1.default);
router.delete('/:userId', deleteUser_1.default);
router.get('/', getAllUsers_1.default);
router.post('/', createUser_1.default);
exports.default = router;
