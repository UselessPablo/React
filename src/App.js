

import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import './index.css'

function App() {
const Saludo = 'Bienvenidos';
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer Valor1={Saludo} >
          Esta aplicación esta en desarrollo
      </ItemListContainer>
      </header>
    </div>
  
  );
}

export default App;
