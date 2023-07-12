import { useMemo, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { DUMMY_PRODUCTS } from './DummyProducts';

function App() {
  const [filterText, setFilterText] = useState("All");
  const [card, setCard] = useState([]);

  const moveToCard = (product) => {
    if(!card.includes(product)){
      card.push(product);
      product.counter = 1;
    }else{
      product.counter++;
    }
    setCard([...card]);
  }

  const filterProducts = (category) => {
    if(category === "All"){
      return DUMMY_PRODUCTS
    }
    return DUMMY_PRODUCTS.filter((elm) => elm.category === category )
  } 

  const products = useMemo(() => filterProducts(filterText), [filterText]);

  const calculateTotal = (card) => {
    return card.reduce((counter, item) =>  counter + item.price*item.counter, 0 )
  }
  const total = useMemo(() => calculateTotal(card), [card] )

  const counterUp = (product) => {
    product.counter++;
    setCard([...card]);
  }

  const counterDown = (product) => {
    product.counter--;
    if(product.counter === 0){
      card.splice(card.indexOf(product), 1 )
    }
    setCard([...card])
  }

  const removeFromCard = (product) => {
    card.splice(card.indexOf(product), 1);
    setCard([...card]);
  }

  return (
    <div className="App">
      <Header onFilter={(text) => setFilterText(text)} />
      <main>
        <ProductList products={products} onMove={moveToCard}/>
        <Card 
            items={card}
            total={total}
            onCounterUp={counterUp}
            onCounterDown={counterDown}
            onDelete={removeFromCard}
           />
      </main>
    </div>
  );
}

export default App;
