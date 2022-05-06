import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { SPOTICLONE_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, "hello");
        user = await prisma.user.findUnique({
          where: { id },
        });
        if (!user) {
          throw new Error("Cannot find user");
        }
      } catch (error) {
        res.send(401);
        res.json({ error: "Not authorized" });
        return;
      }
      return handler(req, res, user);
    }

    res.send(401);
    res.json({ error: "Not authorized" });
  };
};
