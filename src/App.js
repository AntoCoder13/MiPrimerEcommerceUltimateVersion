import './App.css';
import Contactanos from '../src/components/Contactanos/Contactanos';
import Nosotros from '../src/components/Nosotros/Nosotros';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Encuentranos from '../src/components/Encuentranos/Encuentranos';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carrito from './components/Carrito/Carrito';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <CartProvider>
        <NavBar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Contactanos" element={<Contactanos />} />
            <Route path="/Encuentranos" element={<Encuentranos />} />
            <Route path="/item/id:" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
        </NavBar>
      </CartProvider>
    </div>
  );
}

export default App;
