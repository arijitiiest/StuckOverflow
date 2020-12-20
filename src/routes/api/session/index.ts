import { Router } from "express";

import { addFavourite, getFavourites, removeFavourite } from "./controller";

const router = Router();

router.get("/", getFavourites);

router.post("/", addFavourite);

router.delete("/", removeFavourite);

export default router;
