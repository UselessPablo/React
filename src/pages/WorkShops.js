import React, { useState } from 'react'
import {  Box, Grid,Typography} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import Modal from '@mui/material/Modal';
import { getFirestore, collection, getDocs} from 'firebase/firestore';
import { useEffect} from 'react';
import { DayCalendarSkeleton } from '@mui/x-date-pickers-pro';


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
  const [datos, setDatos] = useState([])
  const [informacion, setInformacion] = useState([])
  const [fecha, setFecha] = useState('');
  const [value, setValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'workshop');
    getDocs(queryCollection)
      .then(res => {
        setDatos(res.docs.map(doc => doc.data()));
        setIsLoading(false);
      })
      .catch(error => console.log(error));
    
  }, [])
 
  useEffect(()=>{
   datos.map((dato) => setInformacion(dato))
 },[datos])
  
  useEffect(()=>{
  setFecha(informacion.fecha)
},[informacion.fecha])
 
  const isSameDay = (a, b) => {
    return a.format('YYYY-MM-DD') === b.format('YYYY-MM-DD');
  }

  const shouldDisableDate = (day) => {
    return !isSameDay(day, dayjs(fecha));
  }

  const info = (selectedDate) => {
    if (isSameDay(selectedDate, dayjs(fecha))) {
      handleOpen();
    }
  }
  if (isLoading) {
    return  <DayCalendarSkeleton sx={{mt:30}} />
  }

  return (
    <Box sx={{ mt: 8}} >
      <Grid container spacing={2}>
        <Grid sx={{ backgroundColor: 'info.main', display: 'flex', justifyContent: 'center', mt: 3, alignContent: 'center' }} item xs={6}>
          <Typography variant='h6'> Vitrofusión </Typography>
        </Grid>
        <Grid sx={{ backgroundColor: 'info2.main', display: 'flex', justifyContent: 'center', mt: 3, pb: 2 }} item xs={6}>
          <Typography variant='h6'> Cerámica </Typography>
        </Grid>
      </Grid>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}  >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar  defaultValue={dayjs(fecha)}
            sx={{borderRadius:5 }}
               value={value}
           shouldDisableDate={shouldDisableDate}
                onChange={(newValue) => info(newValue)}/>
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
            {datos.info}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {informacion.info}
            <Typography>Horario: {informacion.horario} </Typography>

            <Typography>  Valor Total: $ {informacion.precio}</Typography>

          </Typography>
        </Box>
      </Modal>
    </Box>
  )
}

export default WorkShops



