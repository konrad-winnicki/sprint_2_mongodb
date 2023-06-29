const products = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "name", "price", "productType"],
      properties: {
        _id: {
          bsonType: "int",
          description: "Require an int",
        },
        name: {
          bsonType: "string",
          description: "Require a string",
        },
        price: {
          bsonType: "decimal",
          description: "Required decimal number",
        },
        productType: {
          enum: ["pizza", "hamburger", "drink"],
          description: "Required one option of: pizza, hamburger, drink",
        },
        categoryId: {
          bsonType: "int",
          description: "Require an int",
        },
        description: {
          bsonType: "string",
          description: "Require a string",
        },
        picture: {
          bsonType: "binData",
          description: "Require binary data for picture",
        },
      },
    },
  },
};

module.exports = { products };
