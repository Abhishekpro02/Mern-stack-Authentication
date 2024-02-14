import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your name"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },

    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1625758535/avatar/avatar_cugq40.png",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
