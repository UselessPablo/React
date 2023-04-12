import React from 'react'
import {  Box, Grid,Typography, Button } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' ,
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'info2.main',
  borderRadius: 2,
  boxShadow: 20,
  p: 4,
};



const WorkShops = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const info = (selectedDate) => {
    if (selectedDate.format('YYYY-MM-DD') === '2023-04-16') {
      
  handleOpen();
    }
  }
  const info2 = (selectedDate) => {
    if (selectedDate.format('YYYY-MM-DD') === '2023-04-23') {

      handleOpen();
    }
  }



 
  return (
 
    <Box sx={{mt:8}} >
      <Grid container spacing={2}>
        <Grid sx={{ backgroundColor: 'info.main', display: 'flex', justifyContent: 'center',mt:3, alignContent:'center' }} item xs={6}>
          <Typography variant='h6'> Vitrofusión </Typography>
        </Grid>
        <Grid sx={{ backgroundColor: 'info2.main', display: 'flex', justifyContent: 'center', mt: 3, pb: 2 }} item xs={6}>
          <Typography variant='h6'> Cerámica </Typography> 
        </Grid>
      </Grid>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}  >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar defaultValue={dayjs('2023-04-16')}  onChange={(date) => info(date)} />
          </LocalizationProvider>
        </Box>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Workshop de Vitrofusión
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Este sábado Workshop, hace tu tutor y llevatelo terminado.
            Costo Total por 4 hs: $10000
          </Typography>
        </Box>
      </Modal>
    </Box>
  )
}

export default WorkShops