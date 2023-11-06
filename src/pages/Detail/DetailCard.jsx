import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useContext, useState } from "react";
import ItemCount from "./CountDetail"
import { CartContext } from "../../Context/CartContext";


const DetailCard = ({products}) => {
    const { image, title, price, description } = products;
    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < products.stock && setCantidad(cantidad + 1)
    }
    return (
      <div className='flex-cards'>
      <Card sx={{ maxWidth: 345, mt: 20, ml: 30, }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250px"
            image= {image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {price}$
            </Typography>
            <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(products, cantidad) }}
                />
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
)}

export default DetailCard





