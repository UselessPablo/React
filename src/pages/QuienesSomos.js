import { useState, useEffect } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { Button, Input, Box, Paper, Typography } from "@mui/material";
import Carrousel from '../components/Carrousel'

const QuienesSomos = () => {
  const navigate = useNavigate();

  const [mensaje, setMensaje] = useState();
  const [mensajeActual, setMensajeActual] = useState(opiniones[Math.floor(Math.random() * opiniones.length)]);

  const inputMessage = (e) => {
    const { name, value } = e.target;
    setMensaje({ ...mensaje, [name]: value });
  }

  const handleClick = () => {
    const db = getFirestore();
    const mensajesCollection = collection(db, 'mensajes');
    addDoc(mensajesCollection, mensaje)
      .then(({ id }) => console.log(id));
    confirmation();
  }

  const confirmation = () => {
    navigate('/');
  }

  const actualizarMensaje = () => {
    setMensajeActual(opiniones[Math.floor(Math.random() * opiniones.length)]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      actualizarMensaje();
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', width:'100%',mt:7}}>
       <Paper elevation={7} variant="elevation" sx={{padding:3, borderRadius:5, textAlign:'center'}}>
        <h4 sx={{mb:3}} >Opiniones de nuestros clientes:👇 </h4>
        <Typography color='green' >{mensajeActual}</Typography>
        </Paper>
      </Box>
      <Carrousel />
      <div className="nosotros">

        <h2 className="parrafo"> Huma es un emprendimiento que nace por la pasión y gusto de transformar el barro en un producto único</h2>
      </div>
      <div className="contacto">
        <h3> Para productos personalizados o consultas envianos un Email y te responderemos a la brevedad</h3>
        <form className="formContact">
          <Input
            placeholder="Email"
            onChange={inputMessage}
            name="email"
            type="email"
            required={true}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <textarea onChange={inputMessage} name='mensaje' placeholder="Mensaje..."></textarea>
          <Button variant='contained' size='small' color='success' type='button' sx={{ mb: 3, ml: 1 }} onClick={handleClick} >Enviar</Button>
        </form>
      </div>
    
    </>
  )
}
const opiniones = [
  "¡Excelente calidad de productos! Los recomiendo totalmente. 👌",
  "Huma hace cosas increíbles con el barro. ¡Muy buen trabajo! ❤️❤️",
  "El servicio al cliente es muy amable y atento. Gracias por todo. 👍",
  "Compré un regalo personalizado para mi amigo y le encantó. ¡Muchas gracias! 😊",
  "Muy contenta con mi compra. Los productos son de alta calidad y únicos. 💕",
  "Los productos de Huma son hermosos, estoy muy satisfecho con mi compra.",
  "Mi taza personalizada es perfecta, gracias por hacerla realidad.",
  "El trabajo de Huma es impresionante, definitivamente volveré a comprar.",
  "Excelente atención al cliente, me ayudaron en todo lo que necesité.",
  "Recomiendo Huma a todos mis amigos y familiares, son geniales.",
  "Los productos de Huma son el regalo perfecto para cualquier ocasión.",
  "No puedo creer la calidad y el detalle de mi pieza de cerámica, es increíble.",
  "Huma es una marca que realmente se preocupa por sus clientes, gracias. ❤️😊",
  "Los productos de Huma son únicos y especiales, no puedo esperar a comprar más.",
  "Mi pedido llegó rápidamente y en perfectas condiciones, gracias por la atención.",
  "La habilidad de Huma para crear piezas personalizadas es impresionante, estoy muy contento."
];

export default QuienesSomos;