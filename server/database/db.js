import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-1asdbei-shard-00-00.mb8v5bp.mongodb.net:27017,ac-1asdbei-shard-00-01.mb8v5bp.mongodb.net:27017,ac-1asdbei-shard-00-02.mb8v5bp.mongodb.net:27017/?ssl=true&replicaSet=atlas-ee2dk9-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true }); // old parse is depreciated
    console.log("db connected succesfully");
  } catch (error) {
    console.log("db error", error);
  }
};

export default Connection;
