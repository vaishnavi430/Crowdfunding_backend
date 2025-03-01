const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "Creator", required: true },
  goalAmount: { type: Number, required: true },
  pledgedAmount: { type: Number, default: 0 },
  deadline: { type: Date, required: true },
  rewards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reward" }],
  backers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Backer" }],
  status: { type: String, enum: ["Active", "Funded", "Expired"], default: "Active" },
});

module.exports = mongoose.model("Project", projectSchema);
