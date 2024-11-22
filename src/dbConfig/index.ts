import { connect } from "mongoose";

export default async function connectDb() {
  try {
    // await connect(process.env.MONGO_URL!).then(() => {
    await connect(
      `mongodb+srv://taha:ILeKvx6neUsLMm1n@cluster0.g4yzn.mongodb.net/learning-next`
    ).then(() => {
      console.log("database connected");
    });
  } catch (error) {
    console.log(error);
  }
}
