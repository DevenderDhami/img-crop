import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: String,
  password: String,
  role: { type: String, default: "user" },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.User || mongoose.model("User", userSchema)
