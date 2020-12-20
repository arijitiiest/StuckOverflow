import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  favourites: [String],
});

export default mongoose.model("Session", sessionSchema);