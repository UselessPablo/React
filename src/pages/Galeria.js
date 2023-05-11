import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import a from '../assets/img/galeria/1.jpg'
import b from '../assets/img/galeria/2.jpg'
import c from '../assets/img/galeria/3.jpg'
import d from '../assets/img/galeria/4.jpg'
import e from '../assets/img/galeria/5.jpg'
import f from '../assets/img/galeria/6.jpg'
import g from '../assets/img/galeria/7.jpg'
import h from '../assets/img/galeria/8.jpg'
import i from '../assets/img/galeria/10.jpg'
import j from '../assets/img/galeria/9.jpg'
import Modal from '@mui/material/Modal';
import { Box, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Galeria = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  return (
   <Box>
   <ImageList sx={{ width: '100%', minHeight: '950px', mt: 5, mb: 4, pb: 6, pt: 5 }}>
      <ImageListItem key="Subheader" cols={2}>

      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} onClick={() => setSelectedImage(item.img)}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar sx={{ height: '50px' }}
            title={item.title}
            subtitle={item.author}
          />
        </ImageListItem>
      ))}
    </ImageList>
      <Modal sx={{ width: '90%', mt: '10vh' }} open={Boolean(selectedImage)} onClose={() => setSelectedImage(null)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
          <img className='galeryImg' src={selectedImage} alt="Imagen seleccionada" />
        <Box sx={{position:'absolute',ml:'69%'}}>
            <Button variant='contained' sx={{mt:1}} color='pop' onClick={() => setSelectedImage(null)}> <CloseIcon  />Cerrar</Button> 
          </Box>
        </Box>
      </Modal>
    </Box>

  )
}
const itemData = [
  {
    img: a,
    title: 'Maceta deco Oso Polar',
    author: '@PabloA',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: b,
    title: 'Mate Principito',
    author: '@AleQ',
  },
  {
    img: c,
    title: 'Maceta Grande Esgrafiada',
    author: '@PabloA',
  },
  {
    img: d,
    title: 'Mate Esgrafiado',
    author: '@PabloA',
    cols: 2,
  },
  {
    img: e,
    title: 'Taza Relax',
    author: '@AleQ',
    cols: 2,
  },
  {
    img: f,
    title: 'Taza Ommmm',
    author: '@PabloA',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: g,
    title: 'Manos Ommm',
    author: '@AleQ',
  },
  {
    img: h,
    title: 'Manos Ommm',
    author: '@AleQ',
  },
  {
    img: i,
    title: 'Varios Barros',
    author: '@PabloA',
    rows: 2,
    cols: 2,
  },
  {
    img: j,
    title: 'Macetas Esgradiadas con Patas',
    author: '@AleQ',
  },

];
export default Galeria