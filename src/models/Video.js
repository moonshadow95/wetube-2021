import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 40 },
  description: { type: String, required: true, trim: true, maxLength: 500 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((tag) =>
      tag.trim().startsWith("#") ? tag : `#${tag.replace(" ", "")}`
    );
});

const movieModel = mongoose.model("Video", videoSchema);

export default movieModel;
