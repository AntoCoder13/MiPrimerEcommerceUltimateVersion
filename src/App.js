import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from '../src/components/Nosotros/Nosotros'
import Contactanos from '../src/components/Contactanos/Contactanos'
import Encuentranos from '../src/components/Encuentranos/Encuentranos'

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={ItemListContainer}/>
          <Route path="/Nosotros" element={Nosotros}/>
          <Route path="/Contactanos" element={Contactanos}/>
          <Route path="/Encuentranos" element={Encuentranos}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
