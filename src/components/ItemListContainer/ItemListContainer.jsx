import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const ItemListContainer = ({img, name, price}) => {
return (
    <Card sx={{ maxWidth: 345, mt: 20, ml: 30 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= {img}
          alt="rompecabezas juguete"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx= {{display: 'flex', justifyContent: 'space-around'}}>
        <Button size="small" >
          Comprar Ahora
        </Button>
      </CardActions>
    </Card>
  );
}



export default ItemListContainer