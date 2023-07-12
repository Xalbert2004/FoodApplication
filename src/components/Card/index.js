import React from 'react';
import CardItem from "../CardItem"

export default function Card({ items, total, onCounterUp, onCounterDown, onDelete }) {
  return (
    <div className="card">
      <p className='total'>Total - {total} AMD</p>
      {
        items.map((elm, i) => {
          return <CardItem
                     key={i}
                     item={elm}
                     onCounterUp={onCounterUp}
                     onCounterDown={onCounterDown}
                     onDelete={onDelete}
                     />
        })
      }
    </div>
  )
}
