const usersInsert = [
  {
    _id: 1,
    name: "John",
    surname: "Doe",
    contactDetails: {
      address: "123 Main St",
      zipCode: "12345",
      city: "New York",
      district: "Manhattan",
      phone: "555-1234",
    },
    videos: [
      {
        videoId: 1,
        title: "Video 1",
        size: 1024,
        fileName: "video1.mp4",
        durationSeconds: 120,
        views: 1000,
        state: "public",
        publishTime: new Date(),
        reactions: [
          {
            date: new Date(),
            senderId: 2,
            reactionType: "like",
          },
          {
            date: new Date(),
            senderId: 3,
            reactionType: "dislike",
          },
        ],

        tags: ["nature", "animals", "fox"],

        topComments: [
          {
            commentId: 1,
            commentSenderId: 2,
            date: new Date(),
            text: "Comment 1",
            reactions: [
              {
                date: new Date(),
                userId: 2,
                reactionType: "like",
              },
              {
                date: new Date("2023-06-22T21:00:00Z"),
                userId: 3,
                reactionType: "dislike",
              },
            ],
          },
          {
            commentId: 2,
            commentSenderId: 3,
            date: new Date("2023-06-22T21:00:00Z"),
            text: "Comment 2",
            reactions: [
              {
                date: new Date("2023-06-22T21:00:00Z"),
                userId: 2,
                reactionType: "like",
              },
              {
                date: new Date("2023-06-22T21:00:00Z"),
                userId: 3,
                reactionType: "like",
              },
            ],
          },
        ],
      },
    ],
    channels: [
      {
        name: "Channel 1",
        date: new Date("2023-06-22T21:00:00Z"),
        channelDescription: "Channel 1 description",
        subscribers: [
          {
            userId: 2,
          },
          {
            userId: 3,
          },
        ],
      },
    ],
    playlist: [
      {
        playlistId: 4,
        name: "Playlist 4",
        date: new Date("2023-06-23T10:30:00Z"),
        status: "private",
        playlistItems: [
          {
            title: "Video 1",
            videoId: 2,
          },
          {
            title: "Video 2",
            videoId: 3,
          },
          {
            title: "Video 4",
            videoId: 4,
          },
        ],
      },
    ],
  },

  {
    _id: 2,
    name: "Jane",
    surname: "Smith",
    contactDetails: {
      address: "456 Elm St",
      zipCode: "54321",
      city: "Los Angeles",
      district: "Hollywood",
      phone: "555-5678",
    },
    videos: [
      {
        videoId: 2,
        title: "Video 2",
        size: 2048,
        fileName: "video2.mp4",
        durationSeconds: 180,
        views: 500,
        state: "private",
        publishTime: new Date("2023-06-23T10:30:00Z"),
        reactions: [
          {
            date: new Date("2023-06-23T10:30:00Z"),
            senderId: 1,
            reactionType: "like",
          },
          {
            date: new Date("2023-06-23T10:30:00Z"),
            senderId: 3,
            reactionType: "dislike",
          },
        ],
        tags: ["nature", "mountains", "water", "lake"],
        topComments: [
          {
            commentId: 3,
            commentSenderId: 1,
            date: new Date("2023-06-23T10:30:00Z"),
            text: "Comment 3",
            reactions: [
              {
                date: new Date("2023-06-23T10:30:00Z"),
                userId: 1,
                reactionType: "like",
              },
              {
                date: new Date("2023-06-23T10:30:00Z"),
                userId: 3,
                reactionType: "dislike",
              },
            ],
          },
          {
            commentId: 4,
            commentSenderId: 1,
            date: new Date("2023-06-23T10:30:00Z"),
            text: "Comment 4",
            reactions: [
              {
                date: new Date("2023-06-23T10:30:00Z"),
                userId: 3,
                reactionType: "like",
              },
              {
                date: new Date("2023-06-23T10:30:00Z"),
                userId: 2,
                reactionType: "like",
              },
            ],
          },
        ],
      },
    ],
    channels: [
      {
        name: "Channel 2",
        date: new Date("2023-06-23T10:30:00Z"),
        channelDescription: "Channel 2 description",
        subscribers: [
          {
            userId: 1,
          },
          {
            userId: 3,
          },
        ],
      },
    ],
    playlist: [
      {
        playlistId: 2,
        name: "Playlist 2",
        date: new Date("2023-06-23T10:30:00Z"),
        status: "private",
        playlistItems: [
          {
            title: "Video 1",
            videoId: 1,
          },
        ],
      },
    ],
  },

  {
    _id: 3,
    name: "John",
    surname: "Viking",
    contactDetails: {
      address: "42 Hoolm street",
      zipCode: "5483",
      city: "New York",
      district: "New Yourk",
      phone: "444-98877",
    },
    videos: [
      {
        videoId: 3,
        title: "Video 3",
        size: 2048,
        fileName: "video3.mp4",
        durationSeconds: 180,
        views: 500,
        state: "private",
        publishTime: new Date("2023-06-23T10:30:00Z"),
        reactions: [
          {
            date: new Date("2023-06-23T10:30:00Z"),
            senderId: 1,
            reactionType: "like",
          },
          {
            date: new Date("2023-06-23T10:30:00Z"),
            senderId: 2,
            reactionType: "dislike",
          },
        ],
        tags: ["nature", "lake"],
        topComments: [
          {
            commentId: 5,
            commentSenderId: 1,
            date: new Date("2023-06-23T10:30:00Z"),
            text: "Comment 5",
            reactions: [
              {
                date: new Date("2023-06-23T10:30:00Z"),
                userId: 2,
                reactionType: "like",
              },
              {
                date: new Date("2023-06-23T10:30:00Z"),
                userId: 3,
                reactionType: "dislike",
              },
            ],
          },
          {
            commentId: 6,
            commentSenderId: 2,
            date: new Date("2023-06-23T10:30:00Z"),
            text: "Comment 6",
            reactions: [
              {
                date: new Date("2023-06-23T10:30:00Z"),
                userId: 1,
                reactionType: "like",
              },
              {
                date: new Date("2023-06-23T10:30:00Z"),
                userId: 3,
                reactionType: "like",
              },
            ],
          },
          {
            commentId: 7,
            commentSenderId: 2,
            date: new Date("2023-06-23T10:30:00Z"),
            text: "Comment 7",
            reactions: [
              {
                date: new Date("2023-06-23T10:30:00Z"),
                userId: 1,
                reactionType: "like",
              },
              {
                date: new Date("2023-06-23T10:30:00Z"),
                userId: 3,
                reactionType: "dislike",
              },
            ],
          },
        ],
      },
      {
        videoId: 4,
        title: "Video 4",
        size: 3072,
        fileName: "video4.mp4",
        durationSeconds: 240,
        views: 2000,
        state: "public",
        publishTime: new Date("2023-06-24T15:45:00Z"),
        reactions: [
          {
            date: new Date("2023-06-24T15:45:00Z"),
            senderId: 1,
            reactionType: "like",
          },
          {
            date: new Date("2023-06-24T15:45:00Z"),
            senderId: 2,
            reactionType: "dislike",
          },
        ],
      },
    ],
    channels: [
      {
        name: "Channel 2",
        date: new Date("2023-06-23T10:30:00Z"),
        channelDescription: "Channel 2 description",
        subscribers: [
          {
            userId: 1,
          },
          {
            userId: 2,
          },
        ],
      },
    ],
    playlist: [
      {
        playlistId: 3,
        name: "Playlist 3",
        date: new Date("2023-06-23T10:30:00Z"),
        status: "private",
        playlistItems: [
          {
            title: "Video 1",
            videoId: 1,
          },
          {
            title: "Video 2",
            videoId: 2,
          },
        ],
      },
    ],
  },
];

const videosInsert = [
  {
    userId: 1,
    videoId: 1,
    title: "Video 1",
    size: 1024,
    fileName: "video1.mp4",
    durationSeconds: 120,
    views: 1000,
    state: "public",
    publishTime: new Date(),
    reactions: [
      {
        date: new Date(),
        senderId: 2,
        reactionType: "like",
      },
      {
        date: new Date(),
        senderId: 3,
        reactionType: "dislike",
      },
    ],

    tags: ["nature", "animals", "fox"],

    topComments: [
      {
        commentId: 1,
        commentSenderId: 2,
        date: new Date(),
        text: "Comment 1",
        reactions: [
          {
            date: new Date(),
            userId: 2,
            reactionType: "like",
          },
          {
            date: new Date("2023-06-22T21:00:00Z"),
            userId: 3,
            reactionType: "dislike",
          },
        ],
      },
      {
        commentId: 2,
        commentSenderId: 3,
        date: new Date("2023-06-22T21:00:00Z"),
        text: "Comment 2",
        reactions: [
          {
            date: new Date("2023-06-22T21:00:00Z"),
            userId: 2,
            reactionType: "like",
          },
          {
            date: new Date("2023-06-22T21:00:00Z"),
            userId: 3,
            reactionType: "like",
          },
        ],
      },
    ],
  },

  {
    userId: 2,
    videoId: 2,
    title: "Video 2",
    size: 2048,
    fileName: "video2.mp4",
    durationSeconds: 180,
    views: 500,
    state: "private",
    publishTime: new Date("2023-06-23T10:30:00Z"),
    reactions: [
      {
        date: new Date("2023-06-23T10:30:00Z"),
        senderId: 1,
        reactionType: "like",
      },
      {
        date: new Date("2023-06-23T10:30:00Z"),
        senderId: 3,
        reactionType: "dislike",
      },
    ],
    tags: ["nature", "mountains", "water", "lake"],
    topComments: [
      {
        commentId: 3,
        commentSenderId: 1,
        date: new Date("2023-06-23T10:30:00Z"),
        text: "Comment 3",
        reactions: [
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 1,
            reactionType: "like",
          },
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 3,
            reactionType: "dislike",
          },
        ],
      },
      {
        commentId: 4,
        commentSenderId: 1,
        date: new Date("2023-06-23T10:30:00Z"),
        text: "Comment 4",
        reactions: [
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 3,
            reactionType: "like",
          },
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 2,
            reactionType: "like",
          },
        ],
      },
    ],
  },

  {
    userId: 3,
    videoId: 3,
    title: "Video 3",
    size: 2048,
    fileName: "video3.mp4",
    durationSeconds: 180,
    views: 500,
    state: "private",
    publishTime: new Date("2023-06-23T10:30:00Z"),
    reactions: [
      {
        date: new Date("2023-06-23T10:30:00Z"),
        senderId: 1,
        reactionType: "like",
      },
      {
        date: new Date("2023-06-23T10:30:00Z"),
        senderId: 2,
        reactionType: "dislike",
      },
    ],
    tags: ["nature", "lake"],
    topComments: [
      {
        commentId: 5,
        commentSenderId: 1,
        date: new Date("2023-06-23T10:30:00Z"),
        text: "Comment 5",
        reactions: [
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 2,
            reactionType: "like",
          },
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 3,
            reactionType: "dislike",
          },
        ],
      },
      {
        commentId: 6,
        commentSenderId: 2,
        date: new Date("2023-06-23T10:30:00Z"),
        text: "Comment 6",
        reactions: [
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 1,
            reactionType: "like",
          },
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 3,
            reactionType: "like",
          },
        ],
      },
      {
        commentId: 7,
        commentSenderId: 2,
        date: new Date("2023-06-23T10:30:00Z"),
        text: "Comment 7",
        reactions: [
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 1,
            reactionType: "like",
          },
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 3,
            reactionType: "dislike",
          },
        ],
      },
    ],
  },
  {
    userId: 3,
    videoId: 4,
    title: "Video 4",
    size: 3072,
    fileName: "video4.mp4",
    durationSeconds: 240,
    views: 2000,
    state: "public",
    publishTime: new Date("2023-06-24T15:45:00Z"),
    reactions: [
      {
        date: new Date("2023-06-24T15:45:00Z"),
        senderId: 1,
        reactionType: "like",
      },
      {
        date: new Date("2023-06-24T15:45:00Z"),
        senderId: 2,
        reactionType: "dislike",
      },
    ],
  },

  {
    userId: 3,
    videoId: 5,
    title: "Video 5",
    size: 2048,
    fileName: "video5.mp4",
    durationSeconds: 180,
    views: 500,
    state: "public",
    publishTime: new Date("2023-06-23T10:30:00Z"),
    reactions: [
      {
        date: new Date("2023-06-23T10:30:00Z"),
        senderId: 1,
        reactionType: "like",
      },
      {
        date: new Date("2023-06-23T10:30:00Z"),
        senderId: 2,
        reactionType: "dislike",
      },
    ],
    tags: ["nature", "lake"],
    topComments: [
      {
        commentId: 8,
        commentSenderId: 1,
        date: new Date("2023-06-23T10:30:00Z"),
        text: "Comment 8",
        reactions: [
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 2,
            reactionType: "like",
          },
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 3,
            reactionType: "dislike",
          },
        ],
      },
      {
        commentId: 9,
        commentSenderId: 2,
        date: new Date("2023-06-23T10:30:00Z"),
        text: "Comment 9",
        reactions: [
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 1,
            reactionType: "like",
          },
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 3,
            reactionType: "like",
          },
        ],
      },
      {
        commentId: 10,
        commentSenderId: 2,
        date: new Date("2023-06-23T10:30:00Z"),
        text: "Comment 7",
        reactions: [
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 1,
            reactionType: "like",
          },
          {
            date: new Date("2023-06-23T10:30:00Z"),
            userId: 3,
            reactionType: "dislike",
          },
        ],
      },
    ],
  },
];






const commentsInsert = [

    {
      commentId: 11,
      videoId: 3,
      commentSenderId: 2,
      text: "First comment",
      date: new Date(),
      reactions: [
        {
          date: new Date(),
          userId: 1,
          reactionType: "like"
        },
        {
          date: new Date(),
          userId: 2,
          reactionType: "dislike"
        }
      ]
    },
    {
      commentId: 12,
      videoId: 2,
      commentSenderId: 1,
      text: "Second comment",
      date: new Date(),
      reactions: [
        {
          date: new Date(),
          userId: 3,
          reactionType: "like"
        },
        {
          date: new Date(),
          userId: 1,
          reactionType: "dislike"
        }
      ]
    },
    {
      commentId: 13,
      videoId: 2,
      commentSenderId: 3,
      text: "Third comment",
      date: new Date(),
      reactions: [
        {
          date: new Date(),
          userId: 1,
          reactionType: "like"
        },
        {
          date: new Date(),
          userId: 3,
          reactionType: "like"
        }
      ]
    },
    {
      commentId: 14,
      videoId: 2,
      commentSenderId: 3,
      text: "Fourth comment",
      date: new Date(),
      reactions: [
        {
          date: new Date(),
          userId: 2,
          reactionType: "like"
        },
        {
          date: new Date(),
          userId: 1,
          reactionType: "dislike"
        }
      ]
    },
    {
      commentId: 15,
      videoId: 3,
      commentSenderId: 1,
      text: "Fifth comment",
      date: new Date(),
      reactions: [
        {
          date: new Date(),
          userId: 2,
          reactionType: "like"
        },
        {
          date: new Date(),
          userId: 1,
          reactionType: "like"
        }
      ]
    }

  
 
  
]


module.exports = { usersInsert, videosInsert, commentsInsert };
