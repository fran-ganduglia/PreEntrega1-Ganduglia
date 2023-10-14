
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Detail from './pages/Detail/Detail';
import Jewelry from './pages/Categories/Jewelery';
import Clothes from './pages/Categories/Clothes';
import Tecnology from './pages/Categories/Tecnology';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {

  return (
    <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <div>
      <NavBar />
    </div>
    </ThemeProvider>
    <Routes>
      <Route path='/' element={<Home /> }/>
      <Route path='/productos' element={<Products /> }/>
      <Route path='/contacto' element={<Contact /> }/>
      <Route path='/detail/:id' element={<Detail /> }/>
      <Route path='/category/joyeria' element={<Jewelry /> }/>
      <Route path='/category/ropa' element={<Clothes /> }/>
      <Route path='/category/tecnologia' element={<Tecnology /> }/>
    </Routes>
    </BrowserRouter>
  );
};

export default App