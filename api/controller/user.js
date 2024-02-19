const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const prisma = new PrismaClient();

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
  const user = await prisma.user.findUnique({ where: { email } });
  if (user) {
    const passOk = await bcrypt.compare(password, user.password);
    if (passOk) {
      console.log("user is logged in");
      res.json("user is logged in");
    } else {
      res.status(404).json({ error: "User not found" });
    }
  }
};

module.exports = { login, register };
