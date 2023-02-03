
import  { useState } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
 import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const QuienesSomos = () => {
   const navigate = useNavigate();
  // const mensajes = {
  //   email: mensaje,
  //   mensaje: mensaje,
  // }
   const notify = () => toast.success("Mensaje enviado, te responderemos a la brevedad", {
     // position: "top-center",
    autoClose: 1750,
     hideProgressBar: true,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "dark",
   });;

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
const [confirm, setConfirm]= useState(false)

const confirmation = () =>{
notify();
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
 <input  placeholder="Email" onChange={inputMessage} name='email' type='email' />
 
 <textarea onChange={inputMessage} name='mensaje'></textarea>
 <button type='button' onClick={handleClick} >Enviar</button>
      </form>
     
 
 </div>
    </>
 )
  }
export default  QuienesSomos;