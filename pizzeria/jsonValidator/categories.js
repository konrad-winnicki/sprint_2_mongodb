const categories = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      description: "Require an object",
      required: ["_id", "name"],
      properties: {
        _id: {
          bsonType: "int",
          description: "Require an int",
        },
        name: {
          bsonType: "string",
          description: "Require a string",
        },
      },
    },
  },
};


module.exports = { categories };
