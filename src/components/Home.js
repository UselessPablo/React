import React from 'react'

import { Box } from '@mui/system'
import Images from './Images'
import ItemListContainer from './ItemListContainer'



const Home = () => {
  return (
    <Box >
      <Images />
      <ItemListContainer />
    </Box>
  )
}

export default Home