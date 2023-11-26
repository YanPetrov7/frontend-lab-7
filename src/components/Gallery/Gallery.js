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
        'https://raw.githubusercontent.com/YanPetrov7/frontend-lab-7/gh-pages/img/apple.png',
    },
    {
      id: 2,
      name: 'Bread',
      price: 30,
      image:
        'https://raw.githubusercontent.com/YanPetrov7/frontend-lab-7/gh-pages/img/bread.png',
    },
    {
      id: 3,
      name: 'Rice',
      price: 25,
      image:
        'https://raw.githubusercontent.com/YanPetrov7/frontend-lab-7/gh-pages/img/rice.png',
    },
    {
      id: 4,
      name: 'Fish',
      price: 40,
      image:
        'https://raw.githubusercontent.com/YanPetrov7/frontend-lab-7/gh-pages/img/fish.png',
    },
    {
      id: 5,
      name: 'Meat',
      price: 35,
      image:
        'https://raw.githubusercontent.com/YanPetrov7/frontend-lab-7/gh-pages/img/meat.png',
    },
    {
      id: 6,
      name: 'Grape',
      price: 50,
      image:
        'https://raw.githubusercontent.com/YanPetrov7/frontend-lab-7/gh-pages/img/grape.png',
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
