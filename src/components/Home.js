import React from 'react'

import { Box } from '@mui/system'
import Navbar from './Navbar'
import Images from './Images'
import Carrousel from './Carrousel'
import ItemListContainer from './ItemListContainer'

const Home = () => {
  return (
    <Box>
    <Navbar/> 
          <Carrousel />

   <Images/> 
   <ItemListContainer/>
          
    </Box>
  )
}

export default Home