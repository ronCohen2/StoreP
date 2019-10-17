import { Request, Response } from "express";
import * as mongoose from "mongoose";
import User from "../model/UserSchema";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { registerValidation } from "../validation/registerValidation";
import { loginValidation } from "../validation/loginValidation";
import { CartStatus } from "./CartControllers";
const keys = require("../config/keys");
import { isEmail } from "validator";
export let registerStep1 = async (req: Request, res: Response) => {
  const { userId, email, password, confirmPass } = req.body;
  const user = await User.find({ ID: userId });
  if (user.length > 0) return res.status(400).send("user is already exist");
  if (password !== confirmPass)
    return res.status(400).send("Password in not equal");
  //fix -email validation
  // if (validator.isEmail(email) == false)
  //   return res.status(400).send("Email is invalid");
  // console.log("sd" + isEmail(email));
  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  try {
    const newUser = await new User({
      ID: userId,
      email,
      password: hashed,
      firstName: null,
      lastName: null,
      city: null,
      street: null,
      status: 1
    });
    await newUser.save();
    res.status(200).send({ status: 1, success: true, newUser });
  } catch (err) {
    res.status(400).send(err);
  }
};
export let registerStep2 = async (req: Request, res: Response) => {
  const { fname, lname, city, street, id } = req.body;
  try {
    const user = User.findByIdAndUpdate(id, {
      $set: {
        firstName: fname,
        lastName: lname,
        city,
        street,
        status: 2
      }
    });
    res.status(200).send({ status: 2, success: true });
  } catch (err) {
    res.status(400).send(err);
  }
};

export let registerStep3 = async (req: Request, res: Response) => {};

// export let registerverification = async (req: Request, res: Response) => {
//   const { ID, email, password, password2 } = req.body;
//   const error = await registerValidation(req.body);
//   if (error.length > 0) {
//     return res.status(202).send({ success: false, Error: error });
//   }
//   jwt.sign(
//     {
//       id: ID,
//       email,
//       password
//     },
//     keys.secretOrKey,
//     { expiresIn: 3600 },
//     (err, token) => {
//       res.status(200).json({ seccess: true, token: "Bearer " + token });
//     }
//   );
// };

// export let Register = async (req: Request, res: Response) => {
//   const { token, city, street, fname, lname } = req.body;
//   //Parse token
//   let decode = jwt.verify(token, keys.secretOrKey);
//   const { id, email, password }: any = decode;
//   //Find User
//   const user = await User.findOne({ ID: id });
//   //Cheack if user exist
//   if (user) return res.status(400).send({ err: "User is alreadt exist." });
//   // Hash Password
//   const salt = await bcrypt.genSalt(10);
//   const hashed = await bcrypt.hash(password, salt);

//   try {
//     //Create new User
//     const newUser = new User({
//       city,
//       street,
//       firstName: fname,
//       lastName: lname,
//       email,
//       password: hashed,
//       ID: id,
//       role: false
//     });
//     //Save User
//     await newUser.save();
//     res.status(200).send({ status: true, token, user: newUser });
//   } catch (err) {
//     // FIX - error object
//     res.send(err);
//   }
// };

export const login = async (req: Request, res: Response) => {
  const { id, password } = req.body;
  const errors = await loginValidation(req.body);
  if (errors.length > 0) {
    return res.status(400).send({ errors });
  }
  try {
    const user = await User.findOne({ ID: id });
    const UserHash: any = user.password;
    const { role, email } = user;
    const validPassword = await bcrypt.compare(password, UserHash);
    if (!validPassword) {
      return res.status(400).send({ msg: "User or Password WRONG !" });
    }
    const token = user.generateToken(id, email, password, role);
    res.status(200).json({ seccess: true, token: token, user });
    return user;
  } catch {
    res.status(400).send({ msg: "User or Password WRONG !" });
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
