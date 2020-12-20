import { Request, Response } from "express";
import axois from "axios";

export const getQuestions = async (req: Request, res: Response) => {
  try {
    const page_no = req.query.page || 1;

    const data = await axois.get(
      `https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow&page=${page_no}`
    );

    const questions = await data.data;

    res
      .status(200)
      .json({ questions: questions.items, has_more: questions.has_more });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
};
