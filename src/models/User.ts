import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: { type: Number, min: 19, max: 25 }, // NGO Age Guardrail
  sex: { type: String, enum: ['male', 'female'] },
  isMarried: { type: Boolean, default: false },
  role: { 
    type: String, 
    enum: ['Trainee', 'Trainer', 'Secretary', 'Assistant', 'Country Director', 'General Director'],
    default: 'Trainee' 
  },
  country: String, // Assigned by General Director
  major: String,   // University degree (Finance, Psychology, etc.)
  companionId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Same-sex link
  termMonths: { type: Number, default: 24 } // 36 for Directors
});

export default mongoose.models.User || mongoose.model('User', UserSchema);