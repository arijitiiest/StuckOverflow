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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
const session_1 = __importDefault(require("../models/session"));
const getAppCookies = (req) => {
    const rawCookies = req.headers.cookie
        ? req.headers.cookie.split("; ")
        : undefined;
    if (!rawCookies)
        return undefined;
    const parsedCookies = {};
    rawCookies.forEach((rawCookie) => {
        const parsedCookie = rawCookie.split("=");
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });
    return parsedCookies;
};
const createToken = () => __awaiter(void 0, void 0, void 0, function* () {
    const session = new session_1.default({ favourites: [] });
    const id = yield session.save();
    return id._id;
});
exports.sessionValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = getAppCookies(req);
        let tok = null;
        if (token !== undefined)
            tok = token.token;
        if (tok !== null) {
            const s = jsonwebtoken_1.decode(tok, { json: true });
            session_1.default.findById(s.token).then((doc) => __awaiter(void 0, void 0, void 0, function* () {
                if (!doc) {
                    const id = yield createToken();
                    const token = jsonwebtoken_1.default.sign({ token: id }, process.env.SECRET_KEY || "");
                    res.cookie("token", token);
                }
                req.app.set("session_id", s.token);
                next();
            }));
        }
        else {
            const id = yield createToken();
            const token = jsonwebtoken_1.default.sign({ token: id }, process.env.SECRET_KEY || "");
            res.cookie("token", token, { httpOnly: true });
            req.app.set("session_id", id);
            next();
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Something went wrong" });
    }
});
//# sourceMappingURL=sessionValidator.js.map