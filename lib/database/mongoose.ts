import mongoose, { Mongoose } from "mongoose";

const MONGODB_URl = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as { mongoose?: MongooseConnection })
  .mongoose || { conn: null, promise: null };

if (!cached) {
  cached = (global as { mongoose?: MongooseConnection }).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URl) {
    throw new Error("MONGODB_URL Ausente");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URl, {
      dbName: "image-processor-ai-sass",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
