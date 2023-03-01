import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'moses',
      email: 'benmos16@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Cat fish',
      image: '/images/Catfish-Farming.jpg',
      slug: 'cat_fish',
    },
    {
      name: 'Eggs',
      image: '/images/Eggs.jpg',
      slug: 'eggs',
    },
    {
      name: 'Boilers',
      image: '/images/boilers.jpg',
      slug: 'boilers',
    },
    {
      name: 'Chicks',
      image: '/images/chicks.jpg',
      slug: 'chicks',
    },
    {
      name: 'Layers',
      image: '/images/Layer.jpg',
      slug: 'layers',
    },
    {
      name: 'Cockerel',
      image: '/images/cockerel.jpg',
      slug: 'cockerel',
    },
  ],
};

export default data;
