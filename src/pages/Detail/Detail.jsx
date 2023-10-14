
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from "../../components/Card/CardProduct"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const Detail = () => {
    let { id } = useParams()
    const [products, setProducts] = useState({})
    

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>setProducts(json))
  }, [id])
  return(
    <ThemeProvider theme={darkTheme}>
    <CardProduct products={products} />
    </ThemeProvider>
  );
};
    
export default Detail



  

