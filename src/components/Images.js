import React from 'react'
import {Box} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import wandb from '../assets/img/b&w.jpg';
import mate from '../assets/img/artmate.jpg';
import nieve from '../assets/img/artnieve.jpg';
import budas from '../assets/img/budasmuchos.jpg';
import platos from '../assets/img/platitolechu.jpg';

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
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
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
    img:mate ,
    title: 'Art. Hogar ',
  },
  {
    img: nieve ,
    title: 'Bowl Rústico',
  },
  {
    img: budas ,
    title: 'Budas',
    cols: 2,
  },
  {
    img: platos ,
    title: 'Platos',
    cols: 2,
  },
 
];

export default Images