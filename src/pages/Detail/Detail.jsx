
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from "../../components/Card/CardProduct"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config"
import DetailCard from './DetailCard';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const Detail = () => {
    let { id } = useParams()
    const [products, setProducts] = useState({})
    

  useEffect(() => {
    const docRef = doc(db, "Products", id)
    getDoc(docRef)
    .then((resp) => {
      setProducts(
        { ...resp.data(), id: resp.id }
      );
    });
  }, [id])
  return(
    <ThemeProvider theme={darkTheme}>
    <DetailCard products={products} />
    </ThemeProvider>
  );
};
    
export default Detail



  

