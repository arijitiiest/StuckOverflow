import { Request, Response } from "express";

import Session from "../../../models/session";

export const getFavourites = async (req: Request, res: Response) => {
  try {    
    const session_id = req.app.get("session_id");

    const favourites = await Session.findById(session_id);

    res.status(200).json(favourites);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
};

export const addFavourite = async (req: Request, res: Response) => {
  try {
    const session_id = req.app.get("session_id");

    const questionId = +req.body.question_id;

    // console.log(session_id, questionId)

    await Session.findByIdAndUpdate(session_id, {
      $push: { favourites: questionId },
    });

    res.status(200).json({ message: "Done" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
};

export const removeFavourite = async (req: Request, res: Response) => {
  try {
    const session_id = req.app.get("session_id");

    const questionId = req.body.question_id;

    await Session.findByIdAndUpdate(session_id, {
      $pull: { favourites: questionId },
    });

    res.status(200).json({ message: "Done" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
};
