import React, { useState, useRef } from 'react';

import arrowBottom from '../assets/img/arrow-bottom.png';
import arrowTop from '../assets/img/arrow-top.png';

export function SortPopUp({ items }) {
  const sortRef = useRef();
  const [visiblePopUp, setvisiblePopUp] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const activeLabel = items[selectedItem];
  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setvisiblePopUp(false);
    }
  };
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    console.log(sortRef.current);
  }, []);
  return (
    <div ref={sortRef} className="sort">
      <div class="sort__label">
        <img width={20} height={22} src={visiblePopUp ? arrowTop : arrowBottom} alt="Arrow"></img>
        <b>Сортування по:</b>
        <span onClick={() => setvisiblePopUp(!visiblePopUp)}>{activeLabel}</span>
      </div>
      <div class="sort__popup">
        <ul>
          {visiblePopUp &&
            items.map((item, index) => (
              <li
                onClick={() => setSelectedItem(index)}
                className={selectedItem === index ? 'active' : null}
                key={index}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

// transform="rotate(180 400 300)"
