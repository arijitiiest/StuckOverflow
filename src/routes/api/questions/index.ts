import { Router } from "express";

import { getQuestions } from "./controller";

const router = Router();

router.get("/", getQuestions);

export default router;
