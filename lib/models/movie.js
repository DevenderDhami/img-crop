import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  description: String,
  releaseYear: Number,
  language: { type: mongoose.Schema.Types.ObjectId, ref: "Language" },
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  
  thumbnail: String,
  banner: String,

  downloadLinks: [
    {
      quality: String,
      size: String,
      url: String,
      server: String,
    },
  ],

  cast: [String],
  director: String,

  uploader: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  ratings: {
    average: { type: Number, default: 0 },
    totalVotes: { type: Number, default: 0 },
  },
  views: { type: Number, default: 0 },

  isFeatured: { type: Boolean, default: false },
  isTrending: { type: Boolean, default: false },
  isRecommended: { type: Boolean, default: false },

  tags: [String],

  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Movie || mongoose.model("Movie", movieSchema)
