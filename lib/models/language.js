import mongoose from "mongoose"

const languageSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
})

export default mongoose.models.Language || mongoose.model("Language", languageSchema)
