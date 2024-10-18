import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Router from './Router';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
        <BrowserRouter>
          <Router/>
          <Toaster/>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;
