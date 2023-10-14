import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <ItemListContainer />
    </ThemeProvider>
  )
}

export default Home