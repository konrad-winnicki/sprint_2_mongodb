const { MongoClient } = require("mongodb");
const { user } = require("./jsonValidator/user");

const { artist } = require("./jsonValidator/artist");

const { usersInsert } = require("./usersInsert");
const { artistsInsert } = require("./artistsInsert");

const uri = "mongodb://127.0.0.1:27017";

async function createCollection(database, collection, schema) {
  try {
    await database.createCollection(collection, schema);
  } catch (err) {
    console.log(err);
  }
}

async function createAllCollections() {
  const client = new MongoClient(uri);

  try {
    const database = client.db("spotify");

    try {
      await createCollection(database, "users", user);
    } catch (err) {
      console.log(err);
    }
    try {
      await createCollection(database, "artists", artist);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

async function insertData(database, collection, data) {
  try {
    await database.collection(collection).insertMany(data);
  } catch (err) {
    console.log(err);
  }
}

async function insertAllData() {
  const client = new MongoClient(uri);
  try {
    const database = client.db("spotify");

    try {
      await insertData(database, "users", usersInsert);
    } catch (err) {
      console.log("User error:", err);
    }

    try {
      await insertData(database, "artists", artistsInsert);
    } catch (err) {
      console.log("Artist error:", err);
    }
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

async function createIndices(){
  const client = new MongoClient(uri);

  try {
    const database = client.db("spotify");

    try {
      await database.collection('artists').createIndex({ songId: 1 })
    } catch (err) {
      console.log("Error:", err);
    }


  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }

}

async function runProgram() {
  try {
    await createAllCollections();
  } catch (err) {
    console.log(err);
  }
  
  try {
    await createIndices();
  } catch (err) {
    console.log(err);
  }
  try {
    await insertAllData();
  } catch (err) {
    console.log(err);
  }
}

runProgram();
//createAllCollections()
//insertAllData()
