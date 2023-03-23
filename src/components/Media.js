import React from 'react'
import {  Card, Box, CardContent, Typography} from "@mui/material";
import humaVid from '../assets/media/humavid2.mp4'
;
const Media = () => {
  return (

     <Box sx={{ ml:2 }}>  
        <Card component="li" sx={{ minWidth: '10',maxWidth:'10', maxHeight:'80',mt:9 }}>
              
              <video sx={{ width: '100%', mr: '20%' }}
                  autoPlay
                  loop
                  muted
                 
                 
              >
              
                  <source 
                      src={humaVid}
                      type="video/mp4"
                  />
              </video>
              
          <CardContent>
              <Typography
                  level="h6"
                  fontWeight="bold"
                  textColor="#fff"
                  textAlign='center'
               
              >
                 Torneando
              </Typography>
          </CardContent>
      </Card>
              </Box>
     
     
  )
}

export default Media