
import  { useState } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
 
const QuienesSomos = () => {
 
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
   
  }

  return (
   <>
   <div>
      
      <h2 className="parrafo"> Huma es un emprendimiento que nace por la pasión y gusto de transformar el barro en un producto único</h2>
    </div>
 <div className="contacto">
 <h3> Para productos personalizados o consultas envianos un Email y te responderemos a la brevedad</h3>
 <form className="formContact">
 <input type='text' placeholder="Email" onChange={inputMessage} name='email' />
 
 <textarea onChange={inputMessage} name='mensaje'></textarea>
 <button type='submit' onClick={handleClick }>Enviar</button>
        </form>
 
 </div>
    </>
 )
  }
export default  QuienesSomos;