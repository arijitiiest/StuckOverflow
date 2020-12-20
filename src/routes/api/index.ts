import { Router } from "express";

import questionsApi from "./questions";
import sessionApi from "./session";
import { sessionValidator } from "../../middleware/sessionValidator";

const router = Router();

router.use("/questions", sessionValidator, questionsApi);

router.use("/sessions", sessionValidator, sessionApi);

export default router;
