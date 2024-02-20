const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET_KEY;

const register = async (req, res) => {
  const { email, password, name } = req.body;
  async function createUser() {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword, // store the hashed password
      },
    });

    console.log(`Created new user: ${newUser.email}`);
    res
      .status(201)
      .send({ message: "User registered successfully", user: newUser });
  }
  createUser(email, password, name)
    .catch((e) => {
      res.status(500).send({ error: e.message });
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    const passOk = await bcrypt.compare(password, user.password);
    if (passOk) {
      console.log("user is logged in");
      const token = jwt.sign({ email, name: user.name }, secret, {
        expiresIn: "1h",
      });

      // Save token in database
      await prisma.token.create({
        data: {
          token: token,
          userId: user.id,
        },
      });

      // Set token cookie and send response
      return res
        .cookie("token", token, {
          httpOnly: true,
        })
        .json({ token: token, message: "User logged in" });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  }
  return res.status(404).json({ error: "User not found" });
};

module.exports = { login, register };
