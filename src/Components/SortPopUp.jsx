import React, { useState, useRef } from 'react'

import arrowBottom from '../assets/img/arrow-bottom.png'
import arrowTop from '../assets/img/arrow-top.png'

const SortPopUp = React.memo(({ items }) => {
  const sortRef = useRef()
  const [visiblePopUp, setvisiblePopUp] = useState(false)
  const [selectedItem, setSelectedItem] = useState(0)
  const activeLabel = items[selectedItem]
  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setvisiblePopUp(false)
    }
  }
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])
  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img width={20} height={22} src={visiblePopUp ? arrowTop : arrowBottom} alt="Arrow"></img>
        <b>Сортування по:</b>
        <span onClick={() => setvisiblePopUp(!visiblePopUp)}>{activeLabel}</span>
      </div>
      <div className="sort__popup">
        <ul>
          {visiblePopUp &&
            items.map((item, index) => (
              <li
                onClick={() => setSelectedItem(index)}
                className={selectedItem === index ? 'active' : null}
                key={index}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
})
export default SortPopUp
// transform="rotate(180 400 300)"
