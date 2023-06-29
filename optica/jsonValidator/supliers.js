const supliers = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "address", "phone", "fax"],
      properties: {
        name: {
          bsonType: "string",
          description: "Required a string",
        },
        address: {
          bsonType: "string",
          description: "Required a string",
        },
        phone: {
          bsonType: "string",
          description: "Required a string",
        },
        fax: {
          bsonType: "string",
          description: "Required a string",
        },
        brands: {
          bsonType: "array",
          description: "This must be an array",
          items: {
            bsonType: "string",
            description: "Required a string",
          },
        },
      },
    },
  },
};

module.exports = { supliers };
