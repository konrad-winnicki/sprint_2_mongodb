const artistsInsert = [
  {
    _id: '1a',
    name: "Taylor",
    surname: "Swift",
    albums: [
      {
        _id: 'a1',
        title: "1989",
        genere: "Pop",
        releaseYear: new Date("2014"),
        songs: [
          {
            songId: 1,
            title: "Shake It Off",
            durationSeconds: 219,
          },
          {
            songId: 2,
            title: "Blank Space",
            durationSeconds: 231,
          },
        ],
      },
      {
        _id: 'a2',
        title: "Reputation",
        genere: "Pop",
        releaseYear: new Date("2017"),
        songs: [
          {
            songId: 3,
            title: "Look What You Made Me Do",
            durationSeconds: 231,
          },
        ],
      },
    ],
  },
  {
    _id: '2a',
    name: "Ed",
    surname: "Sheeran",
    albums: [
      {
        _id: 'a3',
        title: "÷ (Divide)",
        genere: "Pop",
        releaseYear: new Date("2017"),
        songs: [
          {
            songId: 4,
            title: "Shape of You",
            durationSeconds: 233,
          },
          {
            songId: 5,
            title: "Castle on the Hill",
            durationSeconds: 261,
          },
        ],
      },
      {
        _id: 'a4',
        title: "x (Multiply)",
        genere: "Pop",
        releaseYear: new Date("2014"),
        songs: [
          {
            songId: 6,
            title: "Thinking Out Loud",
            durationSeconds: 281,
          },
        ],
      },
    ],
  },

  {
    _id: '3a',
    name: "Billie",
    surname: "Eilish",
    albums: [
      {
        _id: 'a5',
        title: "When We All Fall Asleep, Where Do We Go?",
        genere: "Alternative",
        releaseYear: new Date("2019"),
        songs: [
          {
            songId: 7,
            title: "Bad Guy",
            durationSeconds: 194,
          },
          {
            songId: 8,
            title: "Bury a Friend",
            durationSeconds: 193,
          },
          {
            songId: 9,
            title: "When the Party's Over",
            durationSeconds: 196,
          },
        ],
      },
    ],
  },

  {
    _id: '4a',
    name: "Adele",
    surname: "Adkins",
    albums: [
      {
        _id: 'a6',
        title: "21",
        genere: "Pop",
        releaseYear: new Date("2011"),
        songs: [
          {
            songId: 10,
            title: "Rolling in the Deep",
            durationSeconds: 228,
          },
          {
            songId: 11,
            title: "Someone Like You",
            durationSeconds: 285,
          },
          {
            songId: 12,
            title: "Set Fire to the Rain",
            durationSeconds: 240,
          },
          {
            songId: 13,
            title: "Rumour Has It",
            durationSeconds: 231,
          },
          {
            songId: 14,
            title: "Turning Tables",
            durationSeconds: 256,
          },
          {
            songId: 15,
            title: "Don't You Remember",
            durationSeconds: 242,
          },
          {
            songId: 16,
            title: "One and Only",
            durationSeconds: 289,
          },
          {
            songId: 17,
            title: "Lovesong",
            durationSeconds: 311,
          },
          {
            songId: 18,
            title: "I'll Be Waiting",
            durationSeconds: 244,
          },
          {
            songId: 19,
            title: "Take It All",
            durationSeconds: 234,
          },
        ],
      },
    ],
  },

  {
    _id: '5a',
    name: "Madonna",
    albums: [
      {
        _id: 'a7',
        title: "No name",
        genere: "Pop",
        releaseYear: new Date("2017"),
        songs: [
          {
            songId: 20,
            title: "Shape of You",
            durationSeconds: 233,
          },
          {
            songId: 21,
            title: "Castle on the Hill",
            durationSeconds: 288,
          },
          {
            songId: 22,
            title: "Galway Girl",
            durationSeconds: 170,
          },
          {
            songId: 23,
            title: "Perfect",
            durationSeconds: 263,
          },
          {
            songId: 24,
            title: "Happier",
            durationSeconds: 207,
          },
        ],
      },
    ],
  },
];

module.exports = { artistsInsert };
