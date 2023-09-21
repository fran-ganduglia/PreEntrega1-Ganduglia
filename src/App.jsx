
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <div>
      <NavBar  />
      <ItemListContainer
      img={"https://d22fxaf9t8d39k.cloudfront.net/5b14490faaedf6681be0dcf1f468f1d02bb96ffa38e068d271f8a32c9caa29d538854.jpeg"}
      name={"Rompecabezas"}
      price={"100$"}
     
      />
    </div>
    </ThemeProvider>
  );
};

export default App