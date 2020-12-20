import { NextFunction, Request, Response } from "express";
import jwt, { decode } from "jsonwebtoken";

import Session from "../models/session";

interface parseCookieObj {
  [key: string]: string;
}

const getAppCookies = (req: Request) => {
  const rawCookies = req!.headers!.cookie
    ? req!.headers!.cookie!.split("; ")
    : undefined;
  if (!rawCookies) return undefined;

  const parsedCookies: parseCookieObj = {};
  rawCookies.forEach((rawCookie) => {
    const parsedCookie = rawCookie.split("=");
    parsedCookies[parsedCookie[0]] = parsedCookie[1];
  });
  return parsedCookies;
};

const createToken = async () => {
  const session = new Session({ favourites: [] });
  const id = await session.save();
  return id._id;
};

export const sessionValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = getAppCookies(req);

    let tok = null;

    if (token !== undefined) tok = token.token;

    // console.log(tok);

    if (tok !== null) {
      const s = decode(tok, { json: true });

      Session.findById(s!.token).then(async (doc) => {
        if (!doc) {
          const id = await createToken();

          const token = jwt.sign({ token: id }, process.env.SECRET_KEY || "");
          res.cookie("token", token);
        }
        req.app.set("session_id", s!.token);
        next();
      });
    } else {
      const id = await createToken();

      const token = jwt.sign({ token: id }, process.env.SECRET_KEY || "");
      res.cookie("token", token);
      req.app.set("session_id", id);
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
};
