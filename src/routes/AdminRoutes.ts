import { Router } from "express";
import * as controller from "../controllers/AdminControllers";
// import { Request, Response } from "express";

export const Admin = Router();

Admin.get("/", controller.allProducts);

Admin.post("/ProductsByCategory", controller.allProductsByCategory);

Admin.post("/", controller.addProducts);

Admin.post("/edit", controller.editProducts);

Admin.get("/removeProduct/:id", controller.removeProducts);

Admin.post("/category", controller.addCategory);
Admin.post("/Upload", controller.uploadImage);

// Admin.post("/1", (req: Request, res: Response) => {
//   var accountSid = "ACcd57674ec7272b2c0740bca6e3844009"; // Your Account SID from www.twilio.com/console
//   var authToken = "564d3cf100ece89f12811921b9348a9e"; // Your Auth Token from www.twilio.com/console

//   var client = new twilio(accountSid, authToken);

//   client.messages
//     .create({
//       body: "Hello from Node",
//       to: "+972543369400", // Text this
//       from: "+12039413066" // From a valid Twilio number
//     })
//     .then((message: any) => console.log(message.sid));
// });
