const restaurants = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["address", "city", "district", "zipCode"],
      properties: {
        address: {
          bsonType: "string",
          description: "Require a string",
        },
        city: {
          bsonType: "string",
          description: "Require a string",
        },
        district: {
          bsonType: "string",
          description: "Require a string",
        },
        zipCode: {
          bsonType: "string",
          description: "Require a string",
        },
        workers: {
          bsonType: "array",
          description: "Require an array",
          items: {
            bsonType: "object",
            description: "Require an object",
            required: ["name", "surname", "position", "nif", "phone"],
            properties: {
              name: {
                bsonType: "string",
                description: "Require a string",
              },
              surname: {
                bsonType: "string",
                description: "Require a string",
              },
              position: {
                enum: ["cook", "caterer"],
                description: "Required one option of: cook or caterer",
              },
              nif: {
                bsonType: "string",
                description: "Require a string",
              },
              phone: {
                bsonType: "string",
                description: "Require a string",
              },
            },
          },
        },
        orders: {
          bsonType: "array",
          description: "Require an array",
          items: {
            bsonType: "object",
            required: [
              "_id",
              "client",
              "orderPositions",
              "dataTime",
              "totalPrice",
            ],
            properties: {
              _id: {
                bsonType: "objectId",
                description: "Require an objectId",
              },
              client: {
                bsonType: "object",
                required: [
                  "name",
                  "surname",
                  "address",
                  "zipCode",
                  "district",
                  "phone",
                ],
                properties: {
                  name: {
                    bsonType: "string",
                    description: "Required a string",
                  },
                  surname: {
                    bsonType: "string",
                    description: "Required a string",
                  },
                  address: {
                    bsonType: "string",
                    description: "Required a string",
                  },
                  zipCode: {
                    bsonType: "string",
                    description: "Required a string",
                  },
                  district: {
                    bsonType: "string",
                    description: "Required a string",
                  },
                  phone: {
                    bsonType: "string",
                    description: "Required a string",
                  },
                },
              },
              orderPositions: {
                bsonType: "array",
                description: "Require an array",
                items: {
                  bsonType: "object",
                  description: "Require an object",
                  required: ["productId", "quantity"],
                  properties: {
                    productId: {
                      bsonType: "int",
                      description: "Require an int",
                    },
                    quantity: {
                      bsonType: "int",
                      description: "Require an int",
                    },
                  },
                },
              },
              dataTime: {
                bsonType: "date",
                description: "Reqiuires date object",
              },
              totalPrice: {
                bsonType: "decimal",
                description: "Required decimal number",
              },
              deliveryTime: {
                bsonType: "date",
                description: "Reqiuires date object",
              },
              pickUpTime: {
                bsonType: "date",
                description: "Reqiuires date object",
              },
              caterer: {
                bsonType: "object",
                description: "Reqiuires an object",
                required: ["name", "surname"],
                properties: {
                  name: {
                    bsonType: "string",
                    description: "Require a string",
                  },
                  surname: {
                    bsonType: "string",
                    description: "Require a string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = { restaurants };
