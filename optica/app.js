const { MongoClient } = require("mongodb");
const { opticaSales } = require("./jsonValidator.js/opticaSales");
const { opticaSalesInsert } = require("./insertData");

const uri = "mongodb://127.0.0.1:27017";


async function createCollection() {
  const client = new MongoClient(uri);
  try {
    const database = client.db("optica");
    try {
      await database.createCollection("opticaSales", opticaSales);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

async function insertData() {
  try {
    const database = client.db("optica");
    try {
      await database.collection("opticaSales").insertMany(opticaSalesInsert);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

async function runProgram() {
  try {
    await createCollection();
  } catch (err) {
    console.log(err);
  }
  try {
    await insertData();
  } catch (err) {
    console.log(err);
  }
}

runProgram();
