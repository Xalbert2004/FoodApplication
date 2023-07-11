import React from 'react'

export default function Categories({ onFilter }) {
  const categories = ["All", "Pizza", "Fruits", "Drink", "Coffee"]
  return (
    <>
      <ul className='horizontal'>
          {
            categories.map((elm, i) => <li onClick={() => onFilter(elm)} key={i}>{elm}</li> )
          }
      </ul>
    </>
  )
}
