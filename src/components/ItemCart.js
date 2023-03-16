
import { UseCartContex } from './CartContext'
import { Button,CardContent,Card,Typography,CardMedia,CardActions } from '@mui/material';

const ItemCart = ({product, cantidad}) => {
const { removeProduct, addProduct } = UseCartContex(); 
if (cantidad===0){
  return null;
}
  return (
    <div className='center3'>
      <Card sx={{ maxWidth: 345, padding:2 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {product.precio} x {product.cantidad} Unidade/s   
          </Typography>
          <Typography variant='h6' color='text.primary'>
            Subtotal : $ {product.cantidad * product.precio}
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ height: 140 }}
          image={product.img}
          title={product.name}
        />
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button sx={{width:40, height:30, mt:1, mb:1}} variant='contained' color='error' onClick={() => removeProduct(product.id)}>Borrar</Button>  
        </CardActions>
      </Card>
 
     
    </div>
  )
}

export default ItemCart