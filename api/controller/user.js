const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
require("dotenv").config();
require("dotenv").config();
const secret = process.env.SECRET_KEY;

const register = async (req, res) => {
  const { email, password, userType, firstName, lastName, name } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return res
      .status(400)
      .json({ error: "User with this email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  let user;
  if (userType === "employer") {
    user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        employer: {
          create: {
            name: name,
          },
        },
      },
    });
  } else if (userType === "student") {
    user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        student: {
          create: {
            firstName: firstName,
            lastName: lastName,
          },
        },
      },
    });
  } else {
    return res.status(400).json({ error: "Invalid user type" });
  }

  res.json({ user });
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      employer: true,
      student: true,
    },
  });

  if (!user) {
    return res
      .status(400)
      .json({ error: "User with this email does not exist" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(400).json({ error: "Invalid password" });
  }

  let userType;
  if (user.employer) {
    userType = "employer";
  } else if (user.student) {
    userType = "student";
  }

  const token = jwt.sign({ userId: user.id, userType: userType }, secret, {
    expiresIn: "6h",
  });

  await prisma.token.create({
    data: {
      token: token,
      userId: user.id,
    },
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.json({ token });
};

module.exports = { login, register };
