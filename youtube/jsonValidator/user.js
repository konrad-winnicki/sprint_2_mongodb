const user = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "name", "surname", "contactDetails"],
      properties: {
        _id: {
          bsonType: "int",
          description: "Required an int",
        },
        name: {
          bsonType: "string",
          description: "Requiere a string",
        },
        surname: {
          bsonType: "string",
          description: "Requiere a string",
        },

        contactDetails: {
          bsonType: "object",
          description: "Requiere an object",
          required: ["address", "zipCode", "city", "district", "phone"],
          properties: {
            address: {
              bsonType: "string",
              description: "Requiere a string",
            },
            zipCode: {
              bsonType: "string",
              description: "Requiere a string",
            },
            city: {
              bsonType: "string",
              description: "Requiere a string",
            },
            district: {
              bsonType: "string",
              description: "Requiere a string",
            },
            phone: {
              bsonType: "string",
              description: "Requiere a string",
            },
          },
        },

        videos: {
          bsonType: "array",
          description: "Requiere un array",
          items: {
            bsonType: "object",
            description: "Requiere an object",
            required: [
              "videoId",
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
                            description:
                              "Required one option of: like, dislike",
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

        channels: {
          bsonType: "array",
          description: "Require an array",
          items: {
            bsonType: "object",
            description: "Require an object",
            required: ["name", "date"],
            properties: {
              name: {
                bsonType: "string",
                description: "Requiere a string",
              },
              date: {
                bsonType: "date",
                description: "Requiere a date object",
              },
              channelDescription: {
                bsonType: "string",
                description: "Requiere a string",
              },
              subscribers: {
                bsonType: "array",
                description: "Require an array",
                items: {
                  bsonType: "object",
                  description: "Require an object",
                  required: ["userId"],
                  properties: {
                    userId: {
                      bsonType: "int",
                      description: "required int",
                    },
                  },
                },
              },
            },
          },
        },

        playlist: {
          bsonType: "array",
          description: "Require an object",
          required: ["playlistId", "name", "date", "status"],
          properties: {
            playlistId: {
              bsonType: "int",
              description: "required int",
            },
            name: {
              bsonType: "string",
              description: "Required string",
            },
            date: {
              bsonType: "date",
              description: "Required date object",
            },
            status: {
              enum: ["private", "public"],
              description: "Required one option of: private or public",
            },
            playlistItems: {
              bsonType: "array",
              description: "Required an array",
              items: {
                bsonType: "object",
                description: "Require an object",
                required: ["title", "videoId"],
                properties: {
                  title: {
                    bsonType: "string",
                    description: "Required string",
                  },
                  videoId: {
                    bsonType: "int",
                    description: "Required int",
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
