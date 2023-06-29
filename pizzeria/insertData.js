const { Decimal128, ObjectId } = require("mongodb");




const restaurantsInsert = [
    {
      address: '123 Main Street',
      city: 'New York',
      district: 'Manhattan',
      zipCode: '10001',
      workers: [
        {
            name: 'Alan',
            surname: 'Smith',
            position: 'caterer',
            nif: '123456578A',
            phone: '555-222-2222',
          },
          {
            name: 'Natasha',
            surname: 'Olgierd',
            position: 'cook',
            nif: '23476578A',
            phone: '444-668-456',
          },
          {
            name: 'John',
            surname: 'Doe',
            position: 'caterer',
            nif: '987654321B',
            phone: '555-111-1111',
          },
          {
            name: 'Emily',
            surname: 'Johnson',
            position: 'cook',
            nif: '246813579C',
            phone: '555-333-3333',
          },
          {
            name: 'David',
            surname: 'Brown',
            position: 'caterer',
            nif: '135792468D',
            phone: '555-444-4444',
          },
      ],
      orders: [
        {
          _id: new ObjectId(),
          client:   {
            name: 'Emma',
            surname: 'Anderson',
            address: '456 Maple Avenue',
            zipCode: '54321',
            district: 'Willowbrook',
            phone: '555-123-4567',
          },
          orderPositions: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 },
            { productId: 3, quantity: 3 },
            { productId: 8, quantity: 4 },
          ],
          dataTime: new Date('2023-06-22T18:00:00Z'),
          totalPrice: Decimal128.fromString('12.34'),
          deliveryTime: new Date('2023-06-22T19:00:00Z'),
          caterer: { name: 'Alan', surname: 'Smith' },
        },
        {
          _id: new ObjectId(),
          client: {
            name: 'Oliver',
            surname: 'Brown',
            address: '789 Oak Street',
            zipCode: '12345',
            district: 'Birchwood',
            phone: '555-234-5678',
          },
          orderPositions: [
            { productId: 4, quantity: 1 },
            { productId: 6, quantity: 2 },
            { productId: 9, quantity: 3 },
          ],
          dataTime: new Date('2023-06-22T19:00:00Z'),
          totalPrice: Decimal128.fromString('20.99'),
          deliveryTime: new Date('2023-06-22T20:00:00Z'),
          caterer: { name: 'John', surname: 'Doe' },
        },
        {
          _id: new ObjectId(),
          client: {
            name: 'Sophia',
            surname: 'Clark',
            address: '321 Elm Road',
            zipCode: '98765',
            district: 'Maplewood',
            phone: '555-345-6789',
          },
          orderPositions: [
            { productId: 5, quantity: 2 },
            { productId: 7, quantity: 1 },
          ],
          dataTime: new Date('2023-06-22T20:00:00Z'),
          totalPrice: Decimal128.fromString('15.49'),
          pickUpTime: new Date('2023-06-22T21:00:00Z'),
        },
        {
          _id: new ObjectId(),
          client: {
            name: 'Noah',
            surname: 'Davis',
            address: '987 Pine Lane',
            zipCode: '67890',
            district: 'Cedarville',
            phone: '555-456-7890',
          },
          orderPositions: [{ productId: 1, quantity: 1 }],
          dataTime: new Date('2023-06-22T21:00:00Z'),
          totalPrice: Decimal128.fromString('8.99'),
          deliveryTime: new Date('2023-06-22T22:00:00Z'),
          caterer: { name: 'David', surname: 'Brown' },
        },
   
      ],
    },

    {
        address: '456 Elm Street',
        city: 'Los Angeles',
        district: 'Hollywood',
        zipCode: '90001',
        workers: [
          {
            name: 'Michael',
            surname: 'Johnson',
            position: 'caterer',
            nif: '987654321C',
            phone: '555-111-2222',
          },
          {
            name: 'Sophia',
            surname: 'Lee',
            position: 'cook',
            nif: '456789123D',
            phone: '444-555-6666',
          },
          {
            name: 'Robert',
            surname: 'Smith',
            position: 'caterer',
            nif: '654321987E',
            phone: '555-222-3333',
          },
          {
            name: 'Olivia',
            surname: 'Brown',
            position: 'cook',
            nif: '321654987F',
            phone: '555-333-4444',
          },
        ],
        orders: [
          {
            _id: new ObjectId(),
            client: {
              name: 'Ava',
              surname: 'Evans',
              address: '654 Cedar Street',
              zipCode: '23456',
              district: 'Oakville',
              phone: '555-567-8901',
            },
            orderPositions: [
              { productId: 3, quantity: 2 },
              { productId: 4, quantity: 1 },
              { productId: 5, quantity: 3 },
              { productId: 6, quantity: 4 },
            ],
            dataTime: new Date('2023-06-22T18:30:00Z'),
            totalPrice: Decimal128.fromString('10.99'),
            deliveryTime: new Date('2023-06-22T19:30:00Z'),
            caterer: { name: 'Michael', surname: 'Johnson' },
          },
          {
            _id: new ObjectId(),
            client: {
              name: 'Liam',
              surname: 'Gonzalez',
              address: '321 Birch Avenue',
              zipCode: '87654',
              district: 'Willowbrook',
              phone: '555-678-9012',
            },
            orderPositions: [
              { productId: 1, quantity: 1 },
              { productId: 2, quantity: 2 },
              { productId:6, quantity: 3 },
            ],
            dataTime: new Date('2023-06-22T19:30:00Z'),
            totalPrice: Decimal128.fromString('18.49'),
            pickUpTime: new Date('2023-06-22T20:30:00Z'),
          },
          {
            _id: new ObjectId(),
            client:  {
              name: 'Isabella',
              surname: 'Hall',
              address: '789 Maple Road',
              zipCode: '54321',
              district: 'Birchwood',
              phone: '555-789-0123',
            },
            orderPositions: [
              { productId: 1, quantity: 2 },
              { productId: 2, quantity: 1 },
            ],
            dataTime: new Date('2023-06-22T20:30:00Z'),
            totalPrice: Decimal128.fromString('13.99'),
            deliveryTime: new Date('2023-06-22T21:30:00Z'),
            caterer: { name: 'Robert', surname: 'Smith' },
          },
          {
            _id: new ObjectId(),
            client: {
              name: 'Mia',
              surname: 'Johnson',
              address: '987 Oak Lane',
              zipCode: '12345',
              district: 'Maplewood',
              phone: '555-890-1234',
            },
            orderPositions: [{ productId: 1, quantity: 10 }],
            dataTime: new Date('2023-06-22T21:30:00Z'),
            totalPrice: Decimal128.fromString('6.99'),
            pickUpTime: new Date('2023-06-22T22:30:00Z'),
          },
        ],
      }
   
  ];
  







const productsInsert = [
    {
      _id: 1,
      name: 'Pepperoni Pizza',
      price: Decimal128.fromString('12.99'),
      productType: 'pizza',
      categoryId: 2
    },
    {
      _id: 2,
      name: 'Classic Hamburger',
      price: Decimal128.fromString('5.99'),
      productType: 'hamburger'
    },
    {
      _id: 3,
      name: 'Coca-Cola',
      price: Decimal128.fromString('5.99'),
      productType: 'drink'
    },
    {
      _id: 4,
      name: 'Margherita Pizza',
      price: Decimal128.fromString('9.99'),
      productType: 'pizza',
      categoryId: 3
    },
    {
      _id: 5,
      name: 'BBQ Chicken Burger',
      price: Decimal128.fromString('7.99'),
      productType: 'hamburger'
    },
    {
      _id: 6,
      name: 'Orange Juice',
      price: Decimal128.fromString('2.99'),
      productType: 'drink'
    },
    {
      _id: 7,
      name: 'Veggie Supreme Pizza',
      price: Decimal128.fromString('11.99'),
      productType: 'pizza',
      categoryId: 1
    },
    {
      _id: 8,
      name: 'Cheeseburger',
      price: Decimal128.fromString('6.99'),
      productType: 'hamburger'
    },
    {
      _id: 9,
      name: 'Sprite',
      price: Decimal128.fromString('4.99'),
      productType: 'drink'
    }
  ];



  
  const categoriesInsert = [
    {_id: 1, name: 'vegan'}, {_id: 2, name:'meet'}, {_id: 3, name: 'vegetarian'}
  ]


  module.exports = {categoriesInsert, restaurantsInsert,productsInsert}



