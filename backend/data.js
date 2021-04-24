import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'amit',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
          isSeller: true,
          seller: {
          name: 'SP',
          logo: '/uploads/pooh.jpg',
          description: 'best seller',
          rating: 4.5,
          numReviews: 120,
      },
        },
        {
          name: 'user',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products: [
        {
            name: 'Kurdai',
            category: 'food',
            image: '/images/Kurdaya.jpg',
            price: 50,
            countInStock: 100,
            brand:'Snacks',
            rating: 4.5,
            numReviews: 10,
            description: 'Tasty & crispy product'
        },
        {
            name: 'Colored Papad',
            category: 'food',
            image: '/images/Papad.jpg',
            price: 70,
            countInStock: 50,
            brand:'Papad',
            rating: 4.9,
            numReviews: 15,
            description: 'Spicy & crispy product'
        },
        {
            name: 'Spiral Papad',
            category: 'food',
            image: '/images/Springs.jpg',
            price: 100,
            countInStock: 0,
            brand:'Papad',
            rating: 4,
            numReviews: 10,
            description: 'Tasty & crispy product'
        },
        {
            name: 'Shevaya',
            category: 'food',
            image: '/images/Shevaya.jpg',
            price: 350,
            countInStock: 50,
            brand:'murmura',
            rating: 4.5,
            numReviews: 10,
            description: 'Tasty & crispy product'
        },
        {
            name: 'Sabudana Papad',
            category: 'food',
            image: '/images/SabudanaPapad.jpg',
            price: 90,
            countInStock: 15,
            brand:'murmura',
            rating: 4.5,
            numReviews: 10,
            description: 'Tasty & crispy product'
        },
        {
            name: 'Udid Papad',
            category: 'food',
            image: '/images/UdidPapad.jpg',
            price: 150,
            countInStock: 12,
            brand:'murmura',
            rating: 4.5,
            numReviews: 10,
            description: 'Tasty & crispy product'
        },
    ],
};
export default data;