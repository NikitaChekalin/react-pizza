import React from 'react';

import { Categories } from '../Components/Categories';
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock';
import { SortPopUp } from '../Components/SortPopUp';

export function Home() {
  const categoriesArr = ['Всі', 'Мясні', 'Вегетерианські', 'Гриль', 'Гострі', 'Закриті'];
  const sortItems = ['популярності', 'ціні', 'алфавіту'];

  return (
    <div className="container">
      <div className="content__top">
        <SortPopUp items={sortItems} />
        <Categories items={categoriesArr} />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        <PizzaBlock />
      </div>
    </div>
  );
}
