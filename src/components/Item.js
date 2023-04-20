import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { UseCartContex } from './CartContext';
import AddCart from "./AddCart";
import { Button, Card, CardMedia, Box, CardActions, Typography, CardContent } from "@mui/material";
import { Badge } from '@mui/material'
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
// import AddFavorites from "./AddFavorites";

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});


const Item = ({ info }) => {
  const navigate = useNavigate();
  const { addProduct, isInCart, getCartProduct } = UseCartContex();
  const [goToCart, setGoToCart] = useState(false);
  const [lastClickedProduct, setLastClickedProduct] = useState();
  const productsContainerRef = useRef(null);
  const [rating, setRating] = useState(0);
  const [productRating, setProductRating] = useState(0);
  const getStock = () => {
    const item = isInCart(info.id)

    if (item) {
      return info.cantidad - item.cantidad;
    }
    else {
      return info.cantidad
    }
  }

  const getBadgetQuantity = () => {
    const item = getCartProduct(info.id)

    if (item)
      return item.cantidad;
    else
      return 0;
  }

  const onAdd = (cantidad) => {
    setGoToCart(true);
    addProduct(info, cantidad);
  }

  const handleProductClick = (productId) => {
    setLastClickedProduct(productId);
    console.log(productId);
    navigate(`/detalle/${info.id}`);
  };

  useEffect(() => {
    if (lastClickedProduct && productsContainerRef.current) {
      const lastClickedProductElement = productsContainerRef.current.querySelector(`[data-product-id='${lastClickedProduct}']`);
      if (lastClickedProductElement) {
        lastClickedProductElement.scrollIntoView({ behavior: 'smooth' });
        setLastClickedProduct(null);
      }
    }
  }, [lastClickedProduct]);
console.log(rating);
  return (
    <Box>
      <Card variant="elevation" elevation={2} sx={{ minWidth: 170, maxWidth: 170, ml: 1, mr: 1, mt: 3, maxHeight: 350, borderRadius: 2 }}>
        <Box
          sx={{
            '& > legend': { mt: 0,mb:0 },
          }}
        >
          <StyledRating sx={{display:'flex', justifyContent:'end',mt:1}}
            name="customized-color"
            value={productRating}
            onChange={(event, newValue) => {
              setProductRating(newValue);
            }}
            getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={1}
            max={1}
            icon={<FavoriteIcon fontSize="2rem" />}
            emptyIcon={<FavoriteBorderIcon fontSize="2rem" />}
          />
        {/* <AddFavorites onAdd={onAdd} initial={-0} /> */}
        </Box>
        <Badge sx={{ ml: 1.3 }} badgeContent={getBadgetQuantity()} color='pop'> </Badge>
      
        <CardMedia sx={{ height: 180, minWidth: 170, maxWidth: 170, display: 'flex', justifyContent: 'center' }} image={info.img} onClick={() => handleProductClick(info.id)} title="HUMABRC" />
        <CardMedia image={info.offer} title={info.destacado} />
        <Typography>
          <h3 className="oferta"> {info.destacado}</h3>
        </Typography>
        <CardContent sx={{ maxHeight: 10, minHeight: 10, textAlign: 'center' }} >
          <Typography sx={{ fontSize: 10, fontWeight:'bold' }}>
            {info.detalle}
          </Typography>
        </CardContent>
      
        <CardActions sx={{ maxWidth: 170 }}>
          <Box sx={{ mt: 4, mb: 2, height: 25, display: 'flex', justifyContent: 'space-between', width: '100%', alignContent: 'center' }}>
            <AddCart stock={getStock()} onAdd={onAdd} initial={-0} />
            <Button data-product-id={info.id} color={'info'} size="small" sx={{ height: 23 }} variant="outlined" onClick={() => handleProductClick(info.id)}>Info</Button>
          </Box>
        </CardActions>
      </Card>
      <div className='space3'></div>
    </Box>
  )
}

export default Item;
