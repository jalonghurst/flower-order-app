import { useState } from "react";

import Header from "./components/Layout/Header";
import Flowers from "./components/Flowers/Flowers";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Cart />
      <Header onShowCart={showCartHandler} />
      <main>
        <Flowers />
      </main>
    </CartProvider>
  );
}

export default App;
