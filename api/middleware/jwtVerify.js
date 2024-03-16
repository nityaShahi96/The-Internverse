const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET_KEY;

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.userId = decoded.userId;
    req.userType = decoded.userType;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

exports.verifyToken = verifyToken;
