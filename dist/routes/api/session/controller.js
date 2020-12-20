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
const session_1 = __importDefault(require("../../../models/session"));
exports.getFavourites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const session_id = req.app.get("session_id");
        const favourites = yield session_1.default.findById(session_id);
        res.status(200).json(favourites);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Something went wrong" });
    }
});
exports.addFavourite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const session_id = req.app.get("session_id");
        const questionId = +req.body.question_id;
        yield session_1.default.findByIdAndUpdate(session_id, {
            $push: { favourites: questionId },
        });
        res.status(200).json({ message: "Done" });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Something went wrong" });
    }
});
exports.removeFavourite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const session_id = req.app.get("session_id");
        const questionId = req.body.question_id;
        yield session_1.default.findByIdAndUpdate(session_id, {
            $pull: { favourites: questionId },
        });
        res.status(200).json({ message: "Done" });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Something went wrong" });
    }
});
//# sourceMappingURL=controller.js.map