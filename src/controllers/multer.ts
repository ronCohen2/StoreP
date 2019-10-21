// var multer = require("multer");

// //multer.diskStorage() creates a storage space for storing files.
// var storage = multer.diskStorage({
//   destination: function(req: any, file: any, cb: any) {
//     if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//       cb(null, "./home/");
//     } else {
//       cb({ message: "this file is neither a video or image file" }, false);
//     }
//   },
//   filename: function(req: any, file: any, cb: any) {
//     cb(null, file.originalname);
//   }
// });
// var upload = multer({ storage: storage });
// module.exports = upload;
