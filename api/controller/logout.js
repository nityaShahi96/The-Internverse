const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET_KEY;

const logout = async (req, res) => {
  const token = req.cookies.token;

  if (token) {
    // Delete token from Token table
    await prisma.token.deleteMany({
      where: {
        token: token,
      },
    });

    // Clear token cookie
    res.clearCookie("token");
    return res.json({ message: "User logged out" });
  }

  return res.status(404).json({ error: "No active session found" });
};

module.exports = { logout };
