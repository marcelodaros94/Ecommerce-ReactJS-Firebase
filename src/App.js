import './App.css';
import AppRouter from './components/AppRouter/AppRouter'
import { CartProvider } from './context/CartContext.js';

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </div>
  );
}

export default App;
