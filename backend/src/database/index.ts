import { MongoClient } from "mongodb";
import assert from "assert";
import config from "../config/config.json";

const id = config.id;
const password = config.password;
const url = `mongodb+srv://${id}:${password}@cluster0-jiiuz.mongodb.net/test?retryWrites=true`;

export const insertDocument = async (dbName, collectionName, document) => {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log("Connected collectly to server");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    let r;

    if (document.length > 1) {
      r = await collection.insertMany(document);
      assert.equal(document.length, r.insertedCount);
    } else {
      r = await collection.insertOne(document);
      assert.equal(1, r.insertedCount);
    }
  } catch (error) {
    console.error(error.stack);
  }
  client.close();
};

export const updateDatabase = async (
  dbName,
  collectionName,
  title,
  document
) => {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log("Connected collectly to server");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    let r;
    r = await collection.updateOne(
      { title },
      { $set: { title: "newTitle", image: "newImage" } }
    );
    // r = await collection.updateOne({ title }, { $set: document });
    // assert.equal(1, r.matchedCount);
    // assert.equal(1, r.modifiedCount);
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

    return doc;
  } catch (error) {
    console.error(error.stack);
  }
  client.close();
};

export const removeDatabase = async (dbName, collectionName, condition) => {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log("Connected collectly to server");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    let r;
    r = await collection.deleteOne(condition);
    assert.equal(1, r.deletedCount);
    // r = await collection.deleteMany(condition)
    // assert.equal(condition.length, r.deletedCount) // ??
  } catch (error) {
    console.error(error.stack);
  }

  client.close();
};
