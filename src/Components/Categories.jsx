import React, { useState } from 'react'

const Categories = React.memo(({ items, onClickItems }) => {
  // for avoiding excessive  re-render static items
  const [selectedItem, setSelectedItem] = useState(0)
  const onSelectItems = (index) => {
    setSelectedItem(index)
    onClickItems(index)
  }
  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              // onClick={onClickCategories}   ,    { items && ...}   for avoiding an  error (arrray is not defined)
              onClick={() => onSelectItems(index)}
              className={selectedItem === index ? 'active' : null}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
})
// className={active ? 'active' : null}
export default Categories
