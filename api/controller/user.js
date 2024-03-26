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
const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        student: true,
      },
    });

    if (!user || !user.student) {
      return res
        .status(400)
        .json({ error: "Student with this email does not exist" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ userId: user.id, userType: "student" }, secret, {
      expiresIn: "6h",
    });

    await prisma.token.create({
      data: {
        token: token,
        userId: user.id,
      },
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ token: token });
    console.log(token);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginEmployer = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        employer: true,
      },
    });

    if (!user || !user.employer) {
      return res
        .status(400)
        .json({ error: "Employer with this email does not exist" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ userId: user.id, userType: "employer" }, secret, {
      expiresIn: "6h",
    });

    await prisma.token.create({
      data: {
        token: token,
        userId: user.id,
      },
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ token: token });
    console.log(token);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { loginStudent, loginEmployer, register };
