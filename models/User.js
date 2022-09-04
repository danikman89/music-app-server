import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    favorites: {
      type: [String],
    },
    textColor: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: '',
    },
    designColor: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: 'ru',
    },
  },
  { timestamps: true },
);

export default mongoose.model('User', UserSchema);
