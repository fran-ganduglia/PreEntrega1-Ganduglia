import * as React from 'react';
import CardProduct from "../Card/CardProduct"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
    .then(res=>res.json())
    .then(json=>setProducts(json))
  }, [])

return(
  <div>
  {products.map((products) => {
    return(
       
      <Link to={`/detail/${products.id}`}>
      <CardProduct  key={products.id} products={products} />
      </Link>
      
      )
  })}
  </div> 
)}




export default ItemListContainer;