import Router from './utils/Router';
import CartProvider from './components/CartContext';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {purple,  green, orange, yellow, lightGreen} from '@mui/material/colors';
import './index.css'

const App = () => {
 

   const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[400],
      },
      secondary: {
        main: yellow[400],
      },
      success: {
        main: lightGreen[700],
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
        main:orange[600],
      },
      pop:{
        main:yellow[800],
      },
 fondoDrawer: {
         main: green[200],
       },
       fondoCard: {
        main:lightGreen[100],
       },
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
