import Header from './components/Layout/Header';
import Flowers from './components/Flowers/Flowers';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Flowers />
      </main>
    </CartProvider>
  );
}

export default App;
