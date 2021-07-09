import React, { useState } from 'react';

export function Categories({ items }) {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              // onClick={onClickCategories}   ,    { items && ...}   for avoiding an  error (arrray is not defined)
              onClick={() => setSelectedItem(index)}
              className={selectedItem === index ? 'active' : null}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

// className={active ? 'active' : null}
