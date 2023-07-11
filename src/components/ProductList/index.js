import React from 'react';
import ProductItem from "../ProductItem"

export default function ProductList({products, onMove}) {
  return (
    <div className="productList">
      {
        products.map((elm, i) =>{
          return <ProductItem key={i} product={elm} onMove={onMove} />
        } )
        
      }
    </div>
  )
}
