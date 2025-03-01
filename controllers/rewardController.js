const Reward = require("../models/Reward");

const createReward = async (req, res) => {
  const { projectId, title, description, amountRequired, estimatedDelivery } = req.body;
  const reward = await Reward.create({ projectId, title, description, amountRequired, estimatedDelivery });

  res.status(201).json(reward);
};

module.exports = { createReward };
