import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryActionCreator } from '../redux/reducers/filtersReducer'
import Categories from '../Components/Categories'
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock'
import SortPopUp from '../Components/SortPopUp'

const categoriesArr = ['Всі', 'Мясні', 'Вегетерианські', 'Гриль', 'Гострі', 'Закриті']
const sortItems = ['популярності', 'ціні', 'алфавіту']

export function Home() {
  const onSelectCategory = React.useCallback(
    (index) => dispatch(setCategoryActionCreator(index)),
    []
  )

  const dispatch = useDispatch()
  const pizza = useSelector((state) => state.pizza.items)

  return (
    <div className="container">
      <div className="content__top">
        <SortPopUp items={sortItems} />
        <Categories onClickItems={() => onSelectCategory} items={categoriesArr} />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        <PizzaBlock items={pizza} />
      </div>
    </div>
  )
}
