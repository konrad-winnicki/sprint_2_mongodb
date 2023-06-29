const { MongoClient } = require("mongodb");
const { user } = require("./jsonValidator/user");
const { video } = require("./jsonValidator/video");
const { comment} = require("./jsonValidator/comment");
const { usersInsert, videosInsert, commentsInsert } = require("./insertData");

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
    const database = client.db("youtube");

    try {
      await createCollection(database, "users", user);
    } catch (err) {
      console.log(err);
    }

    try {
      await createCollection(database, "videos", video);
    } catch (err) {
      console.log(err);
    }

    try {
      await createCollection(database, "comments", comment);
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
    const database = client.db("youtube");

    try {
      await insertData(database, "users", usersInsert);
    } catch (err) {
      console.log("Users error:", err);
    }

    try {
      await insertData(database, "videos", videosInsert);
    } catch (err) {
      console.log("Videos error:", err);
    }

    try {
      await insertData(database, "comments", commentsInsert);
    } catch (err) {
      console.log("Users error:", err);
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
    const database = client.db("youtube");

    try {
      await database.collection('videos').createIndex({ userId: 1 })
    } catch (err) {
      console.log("Videos error:", err);
    }

    try {
      await database.collection('comments').createIndex({ videoId: 1 })
    } catch (err) {
      console.log("Comments error:", err);
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
    await insertAllData();
  } catch (err) {
    console.log(err);
  }
  try {
    await createIndices();
  } catch (err) {
    console.log(err);
  }
}

runProgram()
