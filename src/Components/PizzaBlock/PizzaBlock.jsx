import React, { useState } from 'react';
import Pizza from './Pizza';
export default function PizzaBlock() {
  const [pizzaArr, setPizzaArr] = useState([
    {
      id: '1',
      name: 'Чізбургер-піца',
      price: '120',
      imageUrl: '/img/chizburger.png',
    },
    {
      id: '2',
      name: 'Маргарита',
      price: '150',
      imageUrl: '/img/margaryta.png',
    },
    {
      id: '3',
      name: 'Гавайська',
      price: '135',
      imageUrl: '/img/gavajska.png',
    },
    {
      id: '4',
      name: 'Карбонара',
      price: '115',
      imageUrl: '/img/karbonara.png',
    },
  ]);
  return (
    <>
      {pizzaArr &&
        pizzaArr.map((item, index) => (
          <Pizza {...item} key={`${index}_${item.id}`}>
            {item}
          </Pizza>
        ))}
    </>
  );
}
