import { Request, Response } from "express";
import * as mongoose from "mongoose";
import User from "../model/UserSchema";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as EmailValidator from "email-validator";
const keys = require("../config/keys");
export let registerverification = async (req: Request, res: Response) => {
  const { ID, email, password, password2 } = req.body;
  const error = [];
  if (!password || !password2) {
    error.push({ type: "id", err: "Password is required" });
  } else {
    if (password !== password2) {
      error.push({ type: "password", err: "Passwords not identical" });
    }
  }

  if (!email) {
    error.push({ type: "email", err: "Email is required" });
  } else {
    const ValidEmail = EmailValidator.validate(email);
    if (!ValidEmail) {
      error.push({ type: "email", err: "Email is not valid." });
    }
  }

  if (!ID) {
    error.push({ type: "id", err: "Id is required" });
  } else {
    try {
      const id = await User.find({ ID });
    } catch (err) {
      error.push({ type: "id", err: "Id is already exist." });
    }
  }

  if (error.length > 0) {
    res.status(404).send({ Error: error });
  } else {
    jwt.sign(
      {
        id: ID,
        email,
        password
      },
      keys.secretOrKey,
      { expiresIn: 3600 },
      (err, token) => {
        res.status(200).json({ seccess: true, token });
      }
    );
  }
};

export let Register = async (req: Request, res: Response) => {};
