import Router from './utils/Router';
import CartProvider from './components/CartContext';


import './index.css'
console.log(process.env.PUBLIC_URL);

  const App = () => (
      <CartProvider>
      <Router />
      </CartProvider>
      
  )
  export default App;
