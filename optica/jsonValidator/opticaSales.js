const opticaSales = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      description: "Require an object",
      required: ["soldProducts", "transactionDate", "client", "seller"],
      properties: {
        soldProducts: {
          bsonType: "array",
          description: "Require an array",
          items: {
            bsonType: "object",
            description: "Require an object",
            required: [
              "brand",
              "dioptreLeft",
              "dioptreRight",
              "frameType",
              "frameColour",
              "glassColour",
              "price",
              "suplier",
            ],
            properties: {
              brand: {
                bsonType: "string",
                description: "Required object id",
              },
              dioptreLeft: {
                bsonType: "decimal",
                description: "Required decimal number",
              },
              dioptreRight: {
                bsonType: "decimal",

                description: "Required decimal number",
              },
              frameType: {
                enum: ["flotant", "pasta", "metallica"],
                description:
                  "Required one option of: flotant, pasta, metallica",
              },
              frameColour: {
                bsonType: "string",
                description: "Required an string",
              },
              glassColour: {
                bsonType: "string",
                description: "Required an string",
              },
              price: {
                bsonType: "decimal",
                description: "Required decimal number",
              },
              suplier: {
                bsonType: "object",
                description: "Reqiuires object with name and surname",
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
                },
              },
            },
          },
        },

        transactionDate: {
          bsonType: "date",
          description: "Reqiuires date object",
        },
        seller: {
          bsonType: "object",
          description: "Reqiuires object with name and surname",
          required: ["name", "surname"],
          properties: {
            name: {
              bsonType: "string",
              description: "Required a string",
            },
            surname: {
              bsonType: "string",
              description: "Required a string",
            },
          },
        },
        client: {
          bsonType: "object",
          required: [
            "_id",
            "name",
            "surname",
            "zipCode",
            "phone",
            "email",
            "registrationDate",
          ],
          properties: {
            _id: {
              bsonType: "int",
              description: "Required an integer",
            },
            name: {
              bsonType: "string",
              description: "Required a string",
            },
            surname: {
              bsonType: "string",
              description: "Required a string",
            },
            zipCode: {
              bsonType: "string",
              description: "Required a string",
            },
            phone: {
              bsonType: "string",
              description: "Required a string",
            },
            email: {
              bsonType: "string",
              description: "Required a string",
            },
            registrationDate: {
              bsonType: "date",
              description: "Required date object",
            },
            recommenderId: {
              bsonType: "int",
            },
          },
        },
      },
    },
  },
};

module.exports = { opticaSales };
