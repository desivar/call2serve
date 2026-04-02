import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  universityMajor: { type: String },
  skills: [String], // This stores your ['Web Dev', 'Accounting'] array
  serviceGoal: { type: String },
}, { timestamps: true });

// This prevents errors when Next.js reloads during development
export default mongoose.models.User || mongoose.model("User", UserSchema);