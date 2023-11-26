import React from 'react';
import GoodsCard from '../GoodsCard/GoodsCard';
import './Gallery.css';

const Gallery = () => {
  const goodsData = [
    {
      id: 1,
      name: 'Apple',
      price: 20,
      image:
        'https://github.com/YanPetrov7/frontend-lab-7/tree/gh-pages/img/apple.png?raw=true',
    },
    {
      id: 2,
      name: 'Bread',
      price: 30,
      image:
        'https://github.com/YanPetrov7/frontend-lab-7/tree/gh-pages/img/bread.png?raw=true',
    },
    {
      id: 3,
      name: 'Rice',
      price: 25,
      image:
        'https://github.com/YanPetrov7/frontend-lab-7/tree/gh-pages/img/rice.png?raw=true',
    },
    {
      id: 4,
      name: 'Fish',
      price: 40,
      image:
        'https://github.com/YanPetrov7/frontend-lab-7/tree/gh-pages/img/fish.png?raw=true',
    },
    {
      id: 5,
      name: 'Meat',
      price: 35,
      image:
        'https://github.com/YanPetrov7/frontend-lab-7/tree/gh-pages/img/meat.png?raw=true',
    },
    {
      id: 6,
      name: 'Grape',
      price: 50,
      image:
        'https://github.com/YanPetrov7/frontend-lab-7/tree/gh-pages/img/grape.png?raw=true',
    },
  ];

  return (
    <div className='gallery'>
      {goodsData.map((item) => (
        <GoodsCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Gallery;
