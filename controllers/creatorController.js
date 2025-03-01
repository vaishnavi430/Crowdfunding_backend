const Creator = require("../models/Creator");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const registerCreator = async (req, res) => {
  const { name, email, password, bio } = req.body;
  const existingUser = await Creator.findOne({ email });

  if (existingUser) return res.status(400).json({ message: "Creator already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const creator = await Creator.create({ name, email, password: hashedPassword, bio });

  if (creator) {
    res.status(201).json({ _id: creator.id, name: creator.name, email: creator.email, token: generateToken(creator.id) });
  } else {
    res.status(400).json({ message: "Invalid creator data" });
  }
};

const loginCreator = async (req, res) => {
  const { email, password } = req.body;
  const creator = await Creator.findOne({ email });

  if (creator && (await bcrypt.compare(password, creator.password))) {
    res.json({ _id: creator.id, name: creator.name, email: creator.email, token: generateToken(creator.id) });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

const getProfile = async (req, res) => {
  res.json(req.user);
};

module.exports = { registerCreator, loginCreator, getProfile };
