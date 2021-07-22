import React from 'react'
import Pizza from './Pizza'
export default function PizzaBlock({ items }) {
  return (
    <>
      {items &&
        items.flat().map((item, index) => (
          <Pizza {...item} key={index}>
            {item}
          </Pizza> // we get -> [[]], flat() -> [[]] -> []
        ))}
    </>
  )
}
