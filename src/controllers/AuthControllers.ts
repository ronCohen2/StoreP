import { Request, Response } from "express";
import * as mongoose from "mongoose";
import User from "../model/UserSchema";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as EmailValidator from "email-validator";
import * as validator from "validator";

import * as isNumeric from "validator/lib/isNumeric";

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
      const id = await User.findOne({ ID });
      if (id) {
        error.push({ type: "id", err: "Id is already exist." });
      }
    } catch (err) {}
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
        res.status(200).json({ seccess: true, token: "Bearer " + token });
      }
    );
  }
};

export let Register = async (req: Request, res: Response) => {
  const { token, city, street, fname, lname } = req.body;
  //Parse token
  let decode = jwt.verify(token, keys.secretOrKey);
  const { id, email, password }: any = decode;
  //Find User
  const user = await User.findOne({ ID: id });
  //Cheack if user exist
  if (user) return res.status(400).send({ err: "User is alreadt exist." });
  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  try {
    //Create new User
    const newUser = new User({
      city,
      street,
      firstName: fname,
      lastName: lname,
      email,
      password: hashed,
      ID: id,
      role: false
    });
    //Save User
    await newUser.save();
    res.status(200).send({ status: true, token });
  } catch (err) {
    // FIX - error object
    res.send(err);
  }
};

export const login = async (req: Request, res: Response) => {
  const { id, password } = req.body;
  const idValid = validator.isNumeric(id);
  if (idValid) {
    const user = await User.findOne({ ID: id });
    const UserPassword: any = user.password;
    if (!user) return res.status(400).send({ err: "User is not exist." });
    const validPassword = await bcrypt.compare(password, UserPassword);
    if (validPassword) {
      // const token = user.generateToken();
      // res.header("x-token", token);
      res.status(200).send("ok");
    } else {
      res.send({ msg: "error in login" });
    }
  } else {
    res.send("error in id");
  }
};
export let getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch {
    res.send("not user");
  }
};
