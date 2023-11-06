import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);
  return (
    <Link className="menu-link" to="/carrito">
            <ShoppingCartIcon />
            <span className="numerito">{cantidadEnCarrito()}</span>
    </Link>
        
  )
}

export default CartWidget

