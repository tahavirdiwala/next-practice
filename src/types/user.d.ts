import mongoose from "mongoose";

interface UserInterFace {
  name: string;
  email: string;
  role: mongoose.Types.ObjectId;
}
