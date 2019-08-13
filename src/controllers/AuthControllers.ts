import { Request, Response } from "express";
import * as mongoose from "mongoose";
import User from "../model/UserSchema";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as EmailValidator from "email-validator";
import * as validator from "validator";
import { registerValidation } from "../validation/registerValidation";

const keys = require("../config/keys");
export let registerverification = async (req: Request, res: Response) => {
  const { ID, email, password, password2 } = req.body;

  const error = await registerValidation(req.body);

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
  //Error array
  let errors: Object[] = [];

  if (typeof password == "undefined") {
    errors.push({ type: "password", msg: "Password is required" });
  }
  if (typeof id == "undefined") {
    errors.push({ type: "id", msg: "Id is required" });
  }
  if (errors.length > 0) {
    return res.send(errors);
  }
  try {
    const user = await User.findOne({ ID: id });
    const UserHash: any = user.password;
    const email: String = user.email;

    //Compere hash
    const validPassword = await bcrypt.compare(password, UserHash);
    if (validPassword) {
      //Generate token
      const token = user.generateToken(id, email, password);
      res.status(200).json({ seccess: true, token: "Bearer " + token });
    } else {
      res.status(400).send({ msg: "User or Password WRONG !" });
    }
  } catch {
    res.send({ msg: "User or Password WRONG !" });
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
