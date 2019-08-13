import * as EmailValidator from "email-validator";
import User from "../model/UserSchema";

export let registerValidation = async (data: any) => {
  const { ID, email, password, password2 } = data;
  let error = [];

  // password  validation
  if (!password || !password2) {
    error.push({ type: "Password", err: "Password is required" });
  } else {
    if (password !== password2) {
      error.push({ type: "password", err: "Passwords not identical" });
    }
  }

  //email valiadation
  if (!email) {
    error.push({ type: "email", err: "Email is required" });
  } else {
    const ValidEmail = EmailValidator.validate(email);
    if (!ValidEmail) {
      error.push({ type: "email", err: "Email is not valid." });
    }
  }

  //id validation
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
  return error;
};
