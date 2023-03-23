
import { UseCartContex } from './CartContext'
import { Button, CardContent, Card, CardMedia, CardActions, Typography } from '@mui/material';


const ItemCart = ({ product, cantidad }) => {
  const { removeProduct } = UseCartContex();
  if (cantidad === 0) {
    return null;
  }
  return (

    <div className='center3'>

      <Card sx={{ maxWidth: 300, borderRadius: 2, backgroundColor: 'info2.main' }}>
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
          <Button size='small' sx={{ Minwidth: 55, height: 30, mt: 1, mb: 1 }} variant='contained' color='eliminar' onClick={() => removeProduct(product.id)}>eliminar</Button>
        </CardActions>
      </Card>


    </div>

  )
}

export default ItemCart