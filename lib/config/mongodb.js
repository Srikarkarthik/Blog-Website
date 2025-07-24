import mongoose from "mongoose";

const ConnectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("✅ MongoDB Connected");
};

export default ConnectDB;
