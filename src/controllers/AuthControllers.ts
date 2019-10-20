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
const client = require("twilio");
const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  apiKey: "14e1ac25",
  apiSecret: "tOkm3GWLwmCTEaSu"
});
// var twilio = require("twilio");

export let registerStep1 = async (req: Request, res: Response) => {
  const { userId, email, password, confirmPassword } = req.body;
  const user = await User.find({ ID: userId });
  const err = [];
  if (user.length > 0) {
    err.push("user is already exist");
  }
  if (password !== confirmPassword) {
    err.push("Password in not equal");
  }
  const UserEmail = await User.find({ email });
  if (UserEmail.length > 0) {
    err.push("Email is already exist");
  }
  if (err.length > 0) {
    return res.status(400).send(err);
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const newUser = await new User({
      ID: userId,
      email,
      password: hashed,
      firstName: undefined,
      lastName: undefined,
      city: undefined,
      street: undefined,
      phone: undefined,
      status: 1
    });
    await newUser.save();
    res.status(200).send({ status: 1, id: newUser._id });
  } catch (er) {
    res.status(400).send(err);
  }
};
export let registerStep2 = async (req: Request, res: Response) => {
  const { fname, lname, city, street, phone, id } = req.body;
  console.log(req.body);
  try {
    const user = await User.findByIdAndUpdate(id, {
      $set: {
        firstName: fname,
        lastName: lname,
        city,
        phone,
        street: street,
        status: 2
      }
    });
    await user.save();
    res.status(200).send({ status: 2, phone: user.phone });
  } catch (err) {
    res.status(400).send(err);
  }
};

export let registerStep3 = (req: Request, res: Response) => {
  const { phone } = req.body;
  nexmo.verify.request(
    {
      number: phone,
      brand: "sadasd",
      code_length: "4"
    },
    (err: any, result: any) => {
      if (err) {
        console.error(err);
        res.status(200).send("/");
      } else {
        const verifyRequestId = result.request_id;
        console.log("request_id", verifyRequestId);
      }
    }
  );
  //     }
  //   );
  // }, 1000);

  // ver();
};
// const ver = () => {
//   var accountSid = "ACcd57674ec7272b2c0740bca6e3844009"; // Your Account SID from www.twilio.com/console
//   var authToken = "3ca63a7db04297bd38ca0056371a9dd8"; // Your Auth Token from www.twilio.com/console
//   const sid = "VA9ac46fa93b2d96f7f5044c61459997c7";
//   client.verify
//     .services(sid)
//     .verifications.create({ to: "+972543369400", channel: "sms" })
//     .then((verification: any) => console.log(verification.sid));
// };
// ver();
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
