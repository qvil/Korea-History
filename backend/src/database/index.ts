import { MongoClient } from "mongodb";
import config from "../config/config.json";

const id = config.id;
const password = config.password;
const url = `mongodb+srv://${id}:${password}@cluster0-jiiuz.mongodb.net/test?retryWrites=true`;

export const insertDocument = async (dbName, collectionName, object) => {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log("Connected collectly to server");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    let r = await collection.insertOne(object);
  } catch (error) {
    console.error(error.stack);
  }
  client.close();
};

export const getDatabase = async (dbName, collectionName) => {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log("Connected collectly to server");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const doc = collection.find({}).toArray();

    console.log(doc);
    return doc;
  } catch (error) {
    console.error(error.stack);
  }
  client.close();
};
