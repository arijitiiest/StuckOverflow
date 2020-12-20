"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const questions_1 = __importDefault(require("./questions"));
const session_1 = __importDefault(require("./session"));
const sessionValidator_1 = require("../../middleware/sessionValidator");
const router = express_1.Router();
router.use("/questions", sessionValidator_1.sessionValidator, questions_1.default);
router.use("/sessions", sessionValidator_1.sessionValidator, session_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map