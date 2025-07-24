import mongoose from "mongoose";

const ConnectmongoDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(process.env.MONGODB_URI); // 'love' DB
};

export default ConnectmongoDB;
