const jwt = require("jsonwebtoken");
export default function(req: any, res: any, next: any) {
  const token = req.header("Token");
  if (!token)
    return res.status(400).send({ status: 403, err: "NO token ptovided." });
  try {
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;
    next();
    console.log("token ");
  } catch {
    console.log("bed token");
    res.status(400).send({ status: 403, err: "Invalid token" });
  }
}
