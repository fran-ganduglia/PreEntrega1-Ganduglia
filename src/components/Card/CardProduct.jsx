import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import * as React from 'react';
import "../../App.css"


const CardProduct = ({products}) => {
    const { image, title, price } = products;
  return (
    <div className="flex-cards">
    <Card className="flex-cards" sx={{ maxWidth: 345, mt: 20, ml: 30, }}>
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
           {price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" >
          Comprar Ahora
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default CardProduct



