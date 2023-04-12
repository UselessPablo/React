import React from 'react'
import {  Box, Grid,Typography, Stack } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';
// import { Alert } from '@mui/material/Alert';

const WorkShops = () => {
 
  const info = (selectedDate) => {
    if (selectedDate.format('YYYY-MM-DD') === '2022-04-17') {
      alert('Este sábado Workshop, hace tu tutor y llevatelo terminado.\n Costo Total por 4 hs: $10000')
    }
  }

 
  return (
 
    <Box sx={{mt:3, display:'flex', justifyContent:'center'}} >
      <Grid container spacing={2}>
        <Grid sx={{ backgroundColor: 'info.main', display: 'flex', justifyContent: 'center',mt:3, alignContent:'center' }} item xs={6}>
          <Typography variant='h6'> Vitrofusión </Typography>
        </Grid>
        <Grid sx={{ backgroundColor: 'info2.main', display: 'flex', justifyContent: 'center', mt: 3, pb: 2 }} item xs={6}>
          <Typography variant='h6'> Cerámica </Typography>
         
        </Grid>


          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar defaultValue={dayjs('2022-04-17')} onChange={info}  />
          </LocalizationProvider>
          
        
    
      </Grid>
    </Box>
  )
}

export default WorkShops