import React from 'react'

export default function CardItem({item, onCounterUp, onCounterDown, onDelete}) {
  return (
    <div className='cardItem'>
      <p className='title'>{item.name}</p>
      <p>qanak - {item.counter}</p>
      <p className='yndGumary'>Arjeqy - {item.price*item.counter} ADM</p>
      <button onClick={() => onCounterUp(item)} >+</button>
      <button onClick={() => onCounterDown(item)}>-</button>
      <button onClick={()=> onDelete(item)} className='del-btn'>Delete</button>
    </div>
  )
}
