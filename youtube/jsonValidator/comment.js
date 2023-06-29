const comment = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["commentId", "videoId", "commentSenderId", "text", "date"],

      properties: {
        commentId: {
          bsonType: "int",
          description: "Requiere a int",
        },

        videoId: {
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
};

module.exports = { comment };
