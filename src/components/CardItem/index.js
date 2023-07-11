import React from 'react'

export default function CardItem({item}) {
  return (
    <div className='cardItem'>
      <p className='title'>{item.name}</p>
      <p>qanak - {item.counter}</p>
      <p className='yndGumary'>Arjeqy - {item.price*item.counter} ADM</p>
      <button>+</button>
      <button>-</button>
      <button className='del-btn'>Delete</button>
    </div>
  )
}
