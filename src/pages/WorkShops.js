import React from 'react'
import { Alert, Box, Grid,Typography, Stack } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';
// import { Alert } from '@mui/material/Alert';

const WorkShops = () => {
 
 const info =()=>{

  alert('hola')
 }
 
 
 
  return (
 
   <Box sx={{display:'flex', justifyContent:'center'}}>
      <Grid container spacing={2}>
        <Grid sx={{ backgroundColor: 'info.main', display: 'flex', justifyContent: 'center',mt:3, alignContent:'center' }} item xs={6}>
          <Typography variant='h5'> Vitrofusión </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar defaultValue={dayjs('2022-04-17')} onChange={info}  />
          </LocalizationProvider>
         
        
      </Grid>
        
        <Grid sx={{ backgroundColor: 'info2.main', display: 'flex', justifyContent: 'center',mt:3,pb:2 }} item xs={6}>
          <Typography variant='h5'> Workshops cerámica </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
     </Grid>
      </Grid>
    </Box>
  )
}

export default WorkShops