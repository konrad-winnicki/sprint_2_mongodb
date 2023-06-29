const video = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      description: "Requiere an object",
      required: [
        "videoId",
        "userId",
        "title",
        "size",
        "fileName",
        "durationSeconds",
        "state",
        "publishTime",
      ],
      properties: {
        videoId: {
          bsonType: "int",
          description: "required int",
        },
        userId: {
          bsonType: "int",
          description: "required int",
        },
        title: {
          bsonType: "string",
          description: "Requiere a string",
        },
        size: {
          bsonType: "int",
          description: "required int",
        },
        fileName: {
          bsonType: "string",
          description: "Requiere a string",
        },
        durationSeconds: {
          bsonType: "int",
          description: "required int",
        },

        state: {
          enum: ["hidden", "private", "public"],
          description: "Required one option of: hidden, private, public",
        },
        publishTime: {
          bsonType: "date",
          description: "Requiere a date object",
        },
        views: {
          bsonType: "int",
          description: "Requiere a int",
        },

        filmDescription: {
          bsonType: "string",
          description: "Requiere a string",
        },

        miniature: {
          bsonType: "binData",
          description: "Require binary data for picture",
        },
        reactions: {
          bsonType: "array",
          description: "Requiere array",
          items: {
            bsonType: "object",
            description: "Requiere an object",
            required: ["date", "senderId", "reactionType"],
            properties: {
              date: {
                bsonType: "date",
                description: "Requiere a date object",
              },
              senderId: {
                bsonType: "int",
                description: "required int",
              },
              reactionType: {
                enum: ["like", "dislike"],
                description: "Required one option of: like, dislike",
              },
            },
          },
        },

        tags: {
          bsonType: "array",
          description: "Requiere array",
          items: { bsonType: "string", description: "Requiere a string" },
        },

        topComments: {
          bsonType: "array",
          description: "Requiere array",
          items: {
            bsonType: "object",
            description: "Require an object",
            required: ["commentId", "commentSenderId", "text", "date"],
            properties: {
              commentId: {
                bsonType: "int",
                description: "Requiere a int",
              },
              commentSenderId: {
                bsonType: "int",
                description: "Requiere a int",
              },

              date: {
                bsonType: "date",
                description: "Requiere a date object",
              },
              text: {
                bsonType: "string",
                description: "Requiere a string",
              },
              reactions: {
                bsonType: "array",
                description: "Requiere array",
                items: {
                  bsonType: "object",
                  description: "Requiere an object",
                  required: ["date", "userId", "reactionType"],
                  properties: {
                    date: {
                      bsonType: "date",
                      description: "Requiere a date object",
                    },
                    userId: {
                      bsonType: "int",
                      description: "required int",
                    },
                    reactionType: {
                      enum: ["like", "dislike"],
                      description: "Required one option of: like, dislike",
                    },
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

module.exports = { video };
