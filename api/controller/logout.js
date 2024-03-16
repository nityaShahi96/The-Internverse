const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const logout = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(400).json({ error: "No token found" });
  }

  await prisma.token.delete({
    where: {
      token: token,
    },
  });

  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};

module.exports = { logout };
