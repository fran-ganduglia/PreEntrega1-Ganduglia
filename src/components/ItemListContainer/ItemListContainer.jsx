import * as React from 'react';
import CardProduct from "../Card/CardProduct"
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, query , where } from "firebase/firestore"
import { db } from "../../firebase/config"
import DetailCard from '../../pages/Detail/DetailCard';




const ItemListContainer = () => {
  const [products, setProducts ] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    const products = collection(db, "Products")
    const q = category ? query(products, where("category", "==", category)) : products;


    getDocs(q)
    .then((resp) => {
      setProducts(
        resp.docs.map((doc) =>{
          return { ...doc.data(), id: doc.id }
        })
        );
    })
  }, [category])

return(
  
  <div>

  {products.map((products) => {
  return(
    <Link to={`/detail/${products.id}`} >
    <CardProduct key={products.id} products={products} />
    </Link>
    )
})}
</div> 
      )
}




export default ItemListContainer;