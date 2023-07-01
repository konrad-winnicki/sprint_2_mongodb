const { MongoClient } = require("mongodb");
const {
  restaurants,
} = require("./jsonValidator/restaurants");
const {
  products,
} = require("./jsonValidator/products");
const {
  categories,
} = require("./jsonValidator/categories");
const {categoriesInsert, productsInsert, restaurantsInsert} = require('./insertData')


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
    const database = client.db('pizzeria');

      try {
        await createCollection(database, 'products', products);
      } catch (err) {
        console.log(err);
      }
      try {
        await createCollection(database, 'restaurants', restaurants);
      } catch (err) {
        console.log(err);
      }
      try {
        await createCollection(database, 'categories', categories);
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
      const database = client.db("pizzeria");
  
      try {
        await insertData(database, 'restaurants', restaurantsInsert);
      } catch (err) {
        console.log('Restaurant error:', err);
      }
      
  
      try {
        await insertData(database, 'products', productsInsert);
      } catch (err) {
        console.log('Product error:', err);
      }
      try {
        await insertData(database, 'categories', categoriesInsert);
      } catch (err) {
        console.log('Categories error:', err);
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
  }

  
  runProgram();
