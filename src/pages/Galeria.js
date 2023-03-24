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
import i from '../assets/img/galeria/9.jpg'
import j from '../assets/img/galeria/10.jpg'

const Galeria = () => {
 return(
  <ImageList sx={{ width: '100%', height: 550 }}>
    <ImageListItem key="Subheader" cols={2}>
    
    </ImageListItem>
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=248&fit=crop&auto=format`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.title}
          subtitle={item.author}
        
        />
      </ImageListItem>
    ))}
  </ImageList>
  


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