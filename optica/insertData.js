const { Decimal128 } = require("mongodb");

const opticaSalesInsert = [
  {
    soldProducts: [
      {
        brand: "Afax",
        dioptreLeft: Decimal128.fromString("2.00"),
        dioptreRight: Decimal128.fromString("2.25"),
        frameType: "flotant",
        frameColour: "silver",
        glassColour: "dark",
        price: Decimal128.fromString("149.99"),
        suplier: {
          name: "Happy Glasses",
          address: "Address1",
          phone: "670-567-999",
          fax: "670-567-999",
        },
      },
    ],
    transactionDate: new Date(),
    seller: { name: "Miki", surname: "Roberts" },
    client: {
      _id: 1,
      name: "John",
      surname: "Doe",
      zipCode: "12345",
      phone: "555-123-4567",
      email: "john.doe@example.com",
      registrationDate: new Date(),
    },
  },

  {
    soldProducts: [
      {
        brand: "Befax",
        dioptreLeft: Decimal128.fromString("0.75"),
        dioptreRight: Decimal128.fromString("0.75"),
        frameType: "flotant",
        frameColour: "black",
        glassColour: "transparent",
        price: Decimal128.fromString("79.99"),
        suplier: {
          name: "Happy Glasses",
          address: "Address1",
          phone: "670-567-999",
          fax: "670-567-999",
        },
      },
    ],

    transactionDate: new Date(),
    seller: { name: "Miki", surname: "Roberts" },
    client: {
      _id: 2,
      name: "John",
      surname: "Doe",
      zipCode: "12345",
      phone: "555-123-4567",
      email: "john.doe@example.com",
      registrationDate: new Date(),
    },
  },
  {
    soldProducts: [
      {
        brand: "Cefax",
        dioptreLeft: Decimal128.fromString("3.50"),
        dioptreRight: Decimal128.fromString("4.00"),
        frameType: "pasta",
        frameColour: "gold",
        glassColour: "brown",
        price: Decimal128.fromString("199.99"),
        suplier: {
          name: "Happy Glasses",
          address: "Address1",
          phone: "670-567-999",
          fax: "670-567-999",
        },
      },
    ],

    transactionDate: new Date(),
    seller: { name: "Miki", surname: "Roberts" },
    client: {
      _id: 3,
      name: "Alice",
      surname: "Smith",
      zipCode: "54321",
      phone: "555-987-6543",
      email: "alice.smith@example.com",
      registrationDate: new Date(),
    },
  },
  {
    soldProducts: [
      {
        brand: "Rana",
        dioptreLeft: Decimal128.fromString("1.00"),
        dioptreRight: Decimal128.fromString("1.00"),
        frameType: "pasta",
        frameColour: "blue",
        glassColour: "light",
        price: Decimal128.fromString("69.99"),
        suplier: {
          name: "Smart Electronics",
          address: "Address2",
          phone: "670-123-456",
          fax: "670-123-456",
        },
      },
    ],

    transactionDate: new Date(),
    seller: { name: "Miki", surname: "Roberts" },
    client: {
      _id: 2,
      name: "John",
      surname: "Doe",
      zipCode: "12345",
      phone: "555-123-4567",
      email: "john.doe@example.com",
      registrationDate: new Date(),
    },
  },
  {
    soldProducts: [
      {
        brand: "Fuxy",
        dioptreLeft: Decimal128.fromString("2.75"),
        dioptreRight: Decimal128.fromString("3.00"),
        frameType: "pasta",
        frameColour: "red",
        glassColour: "dark",
        price: Decimal128.fromString("129.99"),
        suplier: {
          name: "Fantastic Toys",
          address: "Address3",
          phone: "670-789-123",
          fax: "670-789-123",
        },
      },
    ],

    transactionDate: new Date(),
    seller: { name: "Miki", surname: "Roberts" },
    client: {
      _id: 8,
      name: "John",
      surname: "Doe",
      zipCode: "54321",
      phone: "555-987-6543",
      email: "john.doe@example.com",
      registrationDate: new Date(),
      recommenderId: 3,
    },
  },
  {
    soldProducts: [
      {
        brand: "Difex",
        dioptreLeft: Decimal128.fromString("2.25"),
        dioptreRight: Decimal128.fromString("1.75"),
        frameType: "flotant",
        frameColour: "brown",
        glassColour: "light",
        price: Decimal128.fromString("89.99"),
        suplier: {
          name: "Happy Glasses",
          address: "Address1",
          phone: "670-567-999",
          fax: "670-567-999",
        },
      },
    ],

    transactionDate: new Date(),
    seller: { name: "Miki", surname: "Roberts" },
    client: {
      _id: 4,
      name: "Michael",
      surname: "Johnson",
      zipCode: "67890",
      phone: "555-456-7890",
      email: "michael.johnson@example.com",
      registrationDate: new Date(),
    },
  },
  {
    soldProducts: [
      {
        brand: "Egofax",
        dioptreLeft: Decimal128.fromString("2.25"),
        dioptreRight: Decimal128.fromString("2.25"),
        frameType: "flotant",
        frameColour: "purple",
        glassColour: "light",
        price: Decimal128.fromString("89.99"),
        suplier: {
          name: "Fantastic Toys",
          address: "Address3",
          phone: "670-789-123",
          fax: "670-789-123",
        },
      },
    ],

    transactionDate: new Date(),
    seller: { name: "Julia", surname: "Avangarde" },
    client: {
      _id: 5,
      name: "Emma",
      surname: "Davis",
      zipCode: "98765",
      phone: "555-789-0123",
      email: "emma.davis@example.com",
      registrationDate: new Date(),
    },
  },
  {
    soldProducts: [
      {
        brand: "Grex",
        dioptreLeft: Decimal128.fromString("2.25"),
        dioptreRight: Decimal128.fromString("2.25"),
        frameType: "pasta",
        frameColour: "yellow",
        glassColour: "dark",
        price: Decimal128.fromString("189.99"),
        suplier: {
          name: "Happy Glasses",
          address: "Address1",
          phone: "670-567-999",
          fax: "670-567-999",
        },
      },
    ],

    transactionDate: new Date(),
    seller: { name: "Julia", surname: "Avangarde" },
    client: {
      _id: 6,
      name: "Michael",
      surname: "Johnson",
      zipCode: "98765",
      phone: "555-456-7890",
      email: "michael.johnson@example.com",
      registrationDate: new Date(),
      recommenderId: 1,
    },
  },
  {
    soldProducts: [
      {
        brand: "Hexon",
        dioptreLeft: Decimal128.fromString("2.25"),
        dioptreRight: Decimal128.fromString("2.25"),
        frameType: "pasta",
        frameColour: "silver",
        glassColour: "dark",
        price: Decimal128.fromString("109.99"),
        suplier: {
          name: "Smart Electronics",
          address: "Address2",
          phone: "670-123-456",
          fax: "670-123-456",
        },
      },
    ],

    transactionDate: new Date(),
    seller: { name: "Olgierd", surname: "Valas" },
    client: {
      _id: 7,
      name: "Alice",
      surname: "Smith",
      zipCode: "12345",
      phone: "555-123-4567",
      email: "alice.smith@example.com",
      registrationDate: new Date(),
      recommenderId: 2,
    },
  },
  {
    soldProducts: [
      {
        brand: "Inofex",
        dioptreLeft: Decimal128.fromString("2.25"),
        dioptreRight: Decimal128.fromString("2.25"),
        frameType: "flotant",
        frameColour: "green",
        glassColour: "transparent",
        price: Decimal128.fromString("59.99"),
        suplier: {
          name: "Fantastic Toys",
          address: "Address3",
          phone: "670-789-123",
          fax: "670-789-123",
        },
      },
    ],

    transactionDate: new Date(),
    seller: { name: "Olgierd", surname: "Valas" },
    client: {
      _id: 9,
      name: "Emma",
      surname: "Davis",
      zipCode: "67890",
      phone: "555-789-0123",
      email: "emma.davis@example.com",
      registrationDate: new Date(),
      recommenderId: 4,
    },
  },
];

module.exports = {
  opticaSalesInsert,
};
