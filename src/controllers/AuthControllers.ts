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
// import Cookies from "js-cookie";
const Cookies = require("js-cookie");

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
    console.log(user);
    res.status(200).send({ status: 2 });
  } catch (err) {
    res.status(400).send(err);
  }
};

export let registerStep3 = async (req: Request, res: Response) => {
  let { phone } = req.body;
  phone = "972" + phone;
  console.log(phone);
  await nexmo.verify.request(
    {
      number: phone,
      brand: "Shop-",
      code_length: "4"
    },
    (err: any, result: any) => {
      if (err) {
        console.error(err);
        res.status(400).send(err);
      } else {
        var verifyRequestId = result.request_id;
        console.log("request_id", verifyRequestId);
        res.status(200).send({ id: verifyRequestId });
      }
    }
  );
};
export const CheckVerfication = async (req: Request, res: Response) => {
  const { verifyRequestId, code, id } = req.body;
  console.log("id", id);
  try {
    await nexmo.verify.check(
      {
        request_id: verifyRequestId,
        code: code
      },
      async (err: any, result: any) => {
        const { status } = result;
        switch (status) {
          case "0":
            const user = await User.findByIdAndUpdate(id, {
              $set: {
                status: 3
              }
            });
            await user.save();
            return res.status(200).send("ok");
          case "6":
            return res.status(400).send("Request  is verified already");
          case "16":
            return res
              .status(400)
              .send("The code provided does not match the expected value");
        }
      }
    );
  } catch {}
};
export const login = async (req: Request, res: Response) => {
  const { id, password } = req.body;
  const errors = await loginValidation(req.body);
  if (errors.length > 0) {
    return res.status(400).send({ errors });
  }
  try {
    const user = await User.findOne({ ID: id });
    const UserHash: any = user.password;
    const { role, email, status } = user;
    const validPassword = await bcrypt.compare(password, UserHash);
    if (!validPassword) {
      return res.status(400).send({ msg: "User or Password WRONG !" });
    }
    // if (status !== 3) {
    //   return res.status(400).send({ msg: "User or Password WRONG !", status });
    // }
    const token = user.generateToken(id, email, password, role);
    res.cookie("Token", token);

    res.status(200).json({ seccess: true, token: token, user, status });
    return user;
  } catch {
    res.status(400).send({ msg: "User or Password WRONG !" });
  }
};
export let getPhone = async (req: Request, res: Response) => {
  const { id } = req.body;
  console.log(id);
  try {
    const userData = await User.find({ ID: id });
    res.status(200).send({ phone: userData[0].phone, id: userData[0]._id });
  } catch {
    res.status(400).send({ msg: "Error." });
  }
};
