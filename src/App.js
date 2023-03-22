import Router from './utils/Router';
import CartProvider from './components/CartContext';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {purple, deepPurple, green, orange} from '@mui/material/colors';
import './index.css'

const App = () => {
 
 
   const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[400],
      },
      secondary: {
        main: deepPurple[600],
      },
      success: {
        main: deepPurple[400],
      },
      info: {
        main: purple[500],
      },
      info2: {
        main: purple[100],
      },
      fondo: {
        main: green[400],
      },
      eliminar:{
        main:orange[600]
      }

    },
  })
 return(
 <ThemeProvider theme={theme}>
 <CartProvider>
    <Router />
  </CartProvider>
  </ThemeProvider>
)
}
export default App;
