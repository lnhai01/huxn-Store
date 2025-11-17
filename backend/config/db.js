import mongoose from "mongoose";

const connectDb = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI)
    console.log(`Successfully connected to mongoDB 👍`)

  } catch (error) {
    console.error(`ERROR: ${Error.message}`)
    process.exit(1)
  }
};

export default connectDb;