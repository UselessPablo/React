import React from 'react'

import { Box } from '@mui/system'
import Images from './Images'
// import Carrousel from './Carrousel'
import ItemListContainer from './ItemListContainer'
import {Grid} from '@mui/material';
import Carrousel from './Carrousel';

const Home = () => {
  return (
    <Box >
     

      {/* <Carrousel /> */}
      <Images />
      <Carrousel />
      <ItemListContainer />
   

    </Box>
  )
}

export default Home