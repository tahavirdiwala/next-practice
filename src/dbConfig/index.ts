import { connect } from "mongoose";

export default async function connectDb() {
  try {
    await connect(process.env.MONGO_URL!).then(() => {
      console.log("database connected");
    });
  } catch (error) {
    console.log(error);
  }
}
