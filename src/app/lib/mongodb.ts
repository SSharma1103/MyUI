import { MongoClient, MongoClientOptions } from "mongodb";

/** Augments the global scope during development to persist the Mongo client. */
interface GlobalWithMongo {
  _mongoClientPromise?: Promise<MongoClient>;
}

const uri: string | undefined = process.env.MONGODB_URI;
const options: MongoClientOptions = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

if (process.env.NODE_ENV === "development") {
  const globalWithMongo = global as unknown as GlobalWithMongo;

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri!, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri!, options);
  clientPromise = client.connect();
}

export default clientPromise;

