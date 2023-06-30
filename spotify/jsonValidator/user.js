const user = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "_id",
        "account_name",
        "password",
        "birthDate",
        "sex",
        "country",
        "zipCode",
      ],
      properties: {
        _id: {
          bsonType: "int",
          description: "Required an int",
        },
        account_name: {
          bsonType: "string",
          description: "Requiere a string",
        },
        password: {
          bsonType: "string",
          description: "Requiere a string",
        },

        birthDate: {
          bsonType: "date",
          description: "Requiere a date object",
        },
        sex: {
          enum: ["male", "female", "other"],
          description: "Required one option of: male, female, other",
        },

        zipCode: {
          bsonType: "string",
          description: "Requiere a string",
        },
        city: {
          bsonType: "string",
          description: "Requiere a string",
        },

        subscription: {
          bsonType: "object",
          description: "Required an object",
          required: ["startDate", "renewDate", "payment"],
          properties: {
            startDate: {
              bsonType: "date",
              description: "Requiere a date object",
            },
            renewDate: {
              bsonType: "date",
              description: "Requiere a date object",
            },
            payment: {
              bsonType: "array",
              description: "Required an array",
              items: {
                bsonType: "object",
                description: "Required an object",
                oneOf: [
                  {
                    required: [
                      "paymentMethod",
                      "cardNumber",
                      "expiryDate",
                      "cvv",
                    ],
                    properties: {
                      paymentMethod: {
                        bsonType: "string",
                        description: "Requiere a string",
                      },

                      cardNumber: {
                        bsonType: "string",
                        description: "Requiere a string",
                      },
                      expiryDate: {
                        bsonType: "date",
                        description: "Requiere a date object",
                      },
                      cvv: {
                        bsonType: "int",
                        description: "Requiere an int",
                      },
                    },
                  },
                  {
                    required: ["paymentMethod", "userName"],
                    properties: {
                      paymentMethod: {
                        bsonType: "string",
                        description: "Requiere a string",
                      },
                      userName: {
                        bsonType: "string",
                        description: "Requiere a string",
                      },
                    },
                  },
                ],
              },
            },

            transactions: {
              bsonType: "object",
              description: "Required an object",
              required: ["_id", "date", "total"],
              properties: {
                _id: {
                  bsonType: "objectId",
                  description: "Reqired objectId",
                },
                date: {
                  bsonType: "date",
                  description: "Requiere a date object",
                },
                total: {
                  bsonType: "decimal",
                  description: "Required decimal number",
                },
              },
            },

            userReactions: {
              bsonType: "object",
              description: "Required an object",
              properties: {
                followedArtists: {
                  bsonType: "array",
                  description: "Requiere un array",
                  items: {
                    bsonType: "int",
                    description: "Requiere an int",
                  },
                },
                likedSongs: {
                  bsonType: "array",
                  description: "Requiere un array",
                  items: {
                    bsonType: "int",
                    description: "Requiere an int",
                  },
                },
                likedArtists: {
                  bsonType: "array",
                  description: "Requiere un array",
                  items: {
                    bsonType: "int",
                    description: "Requiere an int",
                  },
                },
              },
            },
          },
        },

        playlist: {
          bsonType: "array",
          description: "Require an object",
          required: [
            "playlistId",
            "title",
            "creationDate",
            "songsNumber",
            "playlistStatus",
          ],
          properties: {
            playlistId: {
              bsonType: "int",
              description: "required int",
            },
            title: {
              bsonType: "string",
              description: "Required string",
            },
            creationDate: {
              bsonType: "date",
              description: "Required date object",
            },
            songsNumber: {
              bsonType: "int",
              description: "Required int",
            },

            eliminationDate: {
              bsonType: "date",
              description: "Required date object",
            },
            playlistStatus: {
              enum: ["active", "inactive"],
              description: "Required one option of: active or inactive",
            },
            playlistItems: {
              bsonType: "array",
              description: "Required an array",
              items: {
                bsonType: "object",
                description: "Require an object",
                required: [
                  "_id",
                  "songTitle",
                  "artistName",
                  "artistSurname",
                  "addingTime",
                  "addedBy",
                ],
                properties: {
                  _id: {
                    bsonType: "int",
                    description: "Required an integer",
                  },
                  artistName: {
                    bsonType: "string",
                    description: "Required string",
                  },
                  artistSurname: {
                    bsonType: "string",
                    description: "Required string",
                  },
                  songTitle: {
                    bsonType: "string",
                    description: "Required string",
                  },

                  addingTime: {
                    bsonType: "date",
                    description: "Required a date object",
                  },
                  addedBy: {
                    bsonType: "int",
                    description: "Required a int",
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

module.exports = { user };
