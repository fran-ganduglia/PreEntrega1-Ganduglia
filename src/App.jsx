
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Detail from './pages/Detail/Detail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartProvider } from "../src/Context/CartContext";
import Carrito from "./components/Cart/Cart";
import Checkout from './components/Checkout/Checkout';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {

  return (
    <div>
    <CartProvider>
    <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    
      <NavBar />
    
    </ThemeProvider>
    <Routes>
      <Route path='/' element={<Home /> }/>
      <Route path='/productos' element={<ItemListContainer /> }/>
      <Route path='/contacto' element={<Contact /> }/>
      <Route path='/detail/:id' element={<Detail /> }/>
      <Route path='/productos/:category' element={<ItemListContainer/> }/>
      <Route path="/carrito" element={<Carrito />}/>
      <Route path="/checkout" element={<Checkout />}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
};

export default App