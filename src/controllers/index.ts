import { Request, Response } from "express";
import * as mongoose from "mongoose";
import UserSchema from "../model/UserSchema";

/**
 * GET /
 * Home page.
 */
export let index = async (req: Request, res: Response) => {
  const user = await UserSchema.find();
  res.send(user);
};
