import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDb is connected`);
  } catch (err) {
    console.log(`MONGODB CONNECTION ERROR`, err);
  }
};

export default connectDb;
