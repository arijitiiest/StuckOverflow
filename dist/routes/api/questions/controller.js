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
exports.getQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page_no = req.query.page || 1;
        const data = yield axios_1.default.get(`https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow&page=${page_no}`);
        const questions = yield data.data;
        res
            .status(200)
            .json({ questions: questions.items, has_more: questions.has_more });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Something went wrong" });
    }
});
//# sourceMappingURL=controller.js.map