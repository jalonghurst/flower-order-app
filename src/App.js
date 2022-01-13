import {useState} from 'react';
import Header from './components/Layout/Header';
import Flowers from './components/Flowers/Flowers';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown,setCartIsShown]= useState(false);
  function showCartHandler () {
    setCartIsShown(true);
  }
  function hideCartHandler() {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <div>Cart...</div>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Flowers />
      </main>
    </CartProvider>
  );
}

export default App;
