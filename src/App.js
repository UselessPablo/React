import Router from './app/Router';
import CartProvider from './components/CartContext';

import './index.css'

  const App = () => (
      <CartProvider>
      <Router />
      </CartProvider>
      
  )
  export default App;
