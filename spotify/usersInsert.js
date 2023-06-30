const { ObjectId, Decimal128 } = require("mongodb");

const usersInsert = [
  {
    _id: 1,
    account_name: "user1",
    password: "password1",
    birthDate: new Date("1990-01-01"),
    sex: "male",
    country: "Country 1",
    zipCode: "12345",
    city: "City 1",
    subscription: {
      startDate: new Date("2022-01-01"),
      renewDate: new Date("2023-01-01"),
      payment: [
        {
          paymentMethod: "creditCard",
          cardNumber: "1234-5678-9012-3456",
          expiryDate: new Date("2024-01-01"),
          cvv: 123,
        },
      ],
      transactions: {
        _id: new ObjectId(),
        date: new Date("2022-01-01"),
        total: Decimal128.fromString("100.50"),
      },
      userReactions: {
        followedArtists: [1, 2, 3],
        likedSongs: [1, 2, 3, 4, 5],
        likedArtists: [1, 2],
      },
    },
    playlist: [
      {
        playlistId: 1,
        title: "Playlist 1",
        creationDate: new Date("2022-01-01"),
        songsNumber: 3,
        eliminationDate: new Date("2023-01-01"),
        playlistStatus: "active",
        playlistItems: [
          {
            _id: 1,
            songTitle: "Shake It Off",
            artistName: "Taylor",
            artistSurname: "Swift",
            addingTime: new Date("2022-01-01"),
            addedBy: 1,
          },
          {
            _id: 2,
            songTitle: "Blank Space",
            artistName: "Taylor",
            artistSurname: "Swift",
            addingTime: new Date("2022-01-01"),
            addedBy: 1,
          },
          {
            _id: 5,
            songTitle: "Castle on the Hill",
            artistName: "Ed",
            artistSurname: "Sheeran",
            addingTime: new Date("2022-01-01"),
            addedBy: 1,
          },
        ],
      },
    ],
  },

  {
    _id: 2,
    account_name: "user2",
    password: "password2",
    birthDate: new Date("1995-05-10"),
    sex: "female",
    country: "Country 2",
    zipCode: "54321",
    city: "City 2",
    subscription: {
      startDate: new Date("2022-01-01"),
      renewDate: new Date("2023-01-01"),
      payment: [
        {
          paymentMethod: "paypal",
          userName: "User2",
        },
      ],
      transactions: {
        _id: new ObjectId(),
        date: new Date("2022-01-01"),
        total: Decimal128.fromString("200.75"),
      },
      userReactions: {
        followedArtists: [3, 4],
        likedSongs: [12, 14, 15],
        likedArtists: [3, 4, 5],
      },
    },
    playlist: [
      {
        playlistId: 2,
        title: "Playlist 2",
        creationDate: new Date("2022-01-01"),
        songsNumber: 1,
        eliminationDate: new Date("2023-01-01"),
        playlistStatus: "active",
        playlistItems: [
          {
            _id: 4,
            songTitle: "Shape of You",
            artistName: "Ed",
            artistSurname: "Sheeran",
            addingTime: new Date("2022-01-01"),
            addedBy: 2,
          },
        ],
      },
      {
        playlistId: 3,
        title: "Playlist 3",
        creationDate: new Date("2022-01-01"),
        songsNumber: 3,
        eliminationDate: new Date("2023-01-01"),
        playlistStatus: "active",
        playlistItems: [
          {
            _id: 6,
            songTitle: "Thinking Out Loud",
            artistName: "Ed",
            artistSurname: "Sheeran",
            addingTime: new Date("2022-01-01"),
            addedBy: 2,
          },
          {
            _id: 7,
            songTitle: "Bad Guy",
            artistName: "Billie",
            artistSurname: "Eilish",
            addingTime: new Date("2022-01-01"),
            addedBy: 1,
          },
          {
            _id: 8,
            songTitle: "Bury a Friend",
            artistName: "Billie",
            artistSurname: "Eilish",
            addingTime: new Date("2022-01-01"),
            addedBy: 1,
          },
        ],
      },
    ],
  },

  {
    _id: 3,
    account_name: "user3",
    password: "password3",
    birthDate: new Date("1990-08-15"),
    sex: "male",
    country: "Country 3",
    zipCode: "67890",
    city: "City 3",
    subscription: {
      startDate: new Date("2021-01-01"),
      renewDate: new Date("2022-01-01"),
      payment: [
        {
          paymentMethod: "creditCard",
          cardNumber: "1234-5678-9012-3456",
          expiryDate: new Date("2023-01-01"),
          cvv: 789,
        },
      ],
      transactions: {
        _id: new ObjectId(),
        date: new Date("2021-01-01"),
        total: Decimal128.fromString("150.50"),
      },
    },
    playlist: [
      {
        playlistId: 4,
        title: "Playlist 4",
        creationDate: new Date("2021-01-01"),
        songsNumber: 1,
        eliminationDate: new Date("2022-01-01"),
        playlistStatus: "active",
        playlistItems: [
          {
            _id: 9,
            songTitle: "When the Party's Over",
            artistName: "Billie",
            artistSurname: "Eilish",
            addingTime: new Date("2021-01-01"),
            addedBy: 3,
          },
        ],
      },
    ],
  },

  {
    _id: 4,
    account_name: "user4",
    password: "password4",
    birthDate: new Date("1995-06-20"),
    sex: "female",
    country: "Country 4",
    zipCode: "98765",
    city: "City 4",
    subscription: {
      startDate: new Date("2022-01-01"),
      renewDate: new Date("2023-01-01"),
      payment: [
        {
          paymentMethod: "paypal",
          userName: "User4",
        },
      ],
      transactions: {
        _id: new ObjectId(),
        date: new Date("2022-01-01"),
        total: Decimal128.fromString("200.75"),
      },
      userReactions: {
        followedArtists: [1],
        likedSongs: [3, 4, 5, 6, 7, 8, 9, 10, 11],
      },
    },
    playlist: [
      {
        playlistId: 5,
        title: "Playlist 4",
        creationDate: new Date("2022-01-01"),
        songsNumber: 1,
        eliminationDate: new Date("2023-01-01"),
        playlistStatus: "active",
        playlistItems: [
          {
            _id: 12,
            songTitle: "Set Fire to the Rain",
            artistName: "Adele",
            artistSurname: "Adkins",
            addingTime: new Date("2022-01-01"),
            addedBy: 4,
          },
        ],
      },
    ],
  },

  {
    _id: 5,
    account_name: "user5",
    password: "password5",
    birthDate: new Date("1990-12-15"),
    sex: "male",
    country: "Country 5",
    zipCode: "54321",
    city: "City 5",
    subscription: {
      startDate: new Date("2022-01-01"),
      renewDate: new Date("2023-01-01"),
      payment: [
        {
          paymentMethod: "creditCard",
          cardNumber: "1234567812345678",
          expiryDate: new Date("2023-12-31"),
          cvv: 123,
        },
      ],
      transactions: {
        _id: new ObjectId(),
        date: new Date("2022-01-01"),
        total: Decimal128.fromString("150.25"),
      },
      userReactions: {
        followedArtists: [1, 2, 3, 4, 5],
        likedSongs: [1, 2, 3, 4, 5, 15, 16],
        likedArtists: [1, 5],
      },
    },
    playlist: [
      {
        playlistId: 6,
        title: "Playlist 5",
        creationDate: new Date("2022-01-01"),
        songsNumber: 3,
        eliminationDate: new Date("2023-01-01"),
        playlistStatus: "active",
        playlistItems: [
          {
            _id: 14,
            songTitle: "Turning Tables",
            artistName: "Adele",
            artistSurname: "Adkins",
            addingTime: new Date("2022-01-01"),
            addedBy: 5,
          },
          {
            _id: 15,
            songTitle: "Don't You Remember",
            artistName: "Adele",
            artistSurname: "Adkins",
            addingTime: new Date("2022-01-01"),
            addedBy: 4,
          },
          {
            _id: 16,
            artistName: "Adele",
            artistSurname: "Adkins",
            songTitle: "One and Only",
            addingTime: new Date("2022-01-01"),
            addedBy: 5,
          },
          {
            _id: 17,
            artistName: "Adele",
            artistSurname: "Adkins",
            songTitle: "Lovesong",
            addingTime: new Date("2022-01-01"),
            addedBy: 1,
          },
        ],
      },
    ],
  },
];

module.exports = { usersInsert };
