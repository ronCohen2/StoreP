export default function(req: any, res: any, next: any) {
  if (req.user.role === false)
    return res.status(403).send({ status: 403, err: "Access denied." });
  next();
}
