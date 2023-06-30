const artist = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      description: "Requiere an object",
      required: ["_id", "name"],
      properties: {
        _id: {
          bsonType: "string",
          description: "required string",
        },
        name: {
          bsonType: "string",
          description: "Requiere a string",
        },
        surname: {
          bsonType: "string",
          description: "Requiere a string",
        },

        artistPicture: {
          bsonType: "binData",
          description: "Require binary data for picture",
        },

        albums: {
          bsonType: "array",
          description: "Requiere an array",
          items: {
            bsonType: "object",
            description: "Requiere an object",
            required: ["_id", "title", "releaseYear", "genere", "songs"],
            properties: {
              _id: {
                bsonType: "string",
                description: "required string",
              },
              genere: {
                bsonType: "string",
                description: "Requiere a string",
              },

              title: {
                bsonType: "string",
                description: "Requiere a string",
              },

              releaseYear: {
                bsonType: "date",
                description: "Requiere a date object",
              },

              songs: {
                bsonType: "array",
                description: "Requiere an array",
                items: {
                  required: ["songId", "title", "durationSeconds"],
                  properties: {
                    songId: {
                      bsonType: "int",
                      description: "required int",
                    },

                    title: {
                      bsonType: "string",
                      description: "Requiere a string",
                    },

                    durationSeconds: {
                      bsonType: "int",
                      description: "required int",
                    },
                  },
                },
              },
              coverPicture: {
                bsonType: "binData",
                description: "Require binary data for picture",
              },
            },
          },
        },
      },
    },
  },
};

module.exports = { artist };
