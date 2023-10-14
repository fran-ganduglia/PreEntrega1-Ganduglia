import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Products = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <ItemListContainer 
    />
    </ThemeProvider>
  )
}

export default Products