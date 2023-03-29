import React from 'react'
import { Box, Grid } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import wandb from '../assets/img/b&w.jpg';
import mate from '../assets/img/artmate.jpg';
import nieve from '../assets/img/artnieve.jpg';
import budas from '../assets/img/budasmuchos.jpg';
import platos from '../assets/img/platitolechu.jpg';
import Carrousel from './Carrousel';


const Images = () => {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (

    <Box>

      <h2 className='marginTop'>Arte..</h2>
      <ImageList
        sx={{ width: '97%', height: '300', borderRadius:5, ml:2.5 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width: '94%', ml:6 }}>
      <div className='bgImage'>
      <h2 className='pulse'>Cerámicas</h2>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h2 className='vertical'> Arte en Barro</h2>
          <p className='parrafoMain'>Productos personalizados, buscanos en la sección Contacto</p>
        </Grid>
        <Grid item xs={6}>
          <h2 className='vertical verticalRight'>Únicos</h2>
        </Grid>

      </Grid>
      <h2 className='conocenos'>Nuestros Productos</h2>
      </div>
    </Box>
    </Box>
  )
}
const itemData = [
  {
    img: wandb,
    title: 'Arte B&W',
    rows: 2,
    cols: 2,
  },
  {
    img: mate,
    title: 'Art. Hogar ',
    rows: 2
  },
  {
    img: nieve,
    title: 'Bowl Rústico',
    rows: 2,
  },
  {
    img: budas,
    title: 'Budas',
    cols: 4,
  },
  {
    img: platos,
    title: 'Platos',
    cols: 4,
    rows: 3,
  },

];

export default Images