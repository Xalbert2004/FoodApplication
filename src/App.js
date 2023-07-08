import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <ProductList/>
        <Card/>
      </main>
    </div>
  );
}

export default App;
