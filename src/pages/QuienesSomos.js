
import  { useState } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
 import { useNavigate } from "react-router-dom";
import { Button,Input } from "@mui/material";

 const QuienesSomos = () => {
   const navigate = useNavigate();
  // const mensajes = {
  //   email: mensaje,
  //   mensaje: mensaje,
  // }

  const [mensaje, setMensaje] = useState();
const inputMessage = (e)=>{

 
  const {name, value} = e.target
setMensaje({...mensaje, [name]: value})
}
 


const handleClick = () => {

    const db = getFirestore();
    const mensajesCollection = collection(db, 'mensajes');
    addDoc(mensajesCollection, mensaje)
      .then(({ id }) => console.log(id));
   confirmation();
  }


const confirmation = () =>{

navigate('/');
}
 

return (
   <>
   <div className="nosotros">
      
      <h2 className="parrafo"> Huma es un emprendimiento que nace por la pasión y gusto de transformar el barro en un producto único</h2>
    </div>
 <div className="contacto">
 <h3> Para productos personalizados o consultas envianos un Email y te responderemos a la brevedad</h3>
 <form className="formContact">
        <Input placeholder="Email" onChange={inputMessage} name='email' type='email' required='email' />
 <textarea onChange={inputMessage} name='mensaje' placeholder="Mensaje..."></textarea>
 
 <Button variant='contained' size='small' color='success' type='button'sx={{mb:3, ml:1}} onClick={handleClick} >Enviar</Button>
      
      </form>
     
 
 </div>
    </>
 )
  }
export default  QuienesSomos;