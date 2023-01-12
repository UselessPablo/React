
import React, { useState } from "react";


export const QuienesSomos = () => {
 const [clean, setClean] = useState (false);

const cleanText = ()=>{


}

  return (
   <>
   <div>
      
      <h2 className="parrafo"> Huma es un emprendimiento que nace por la pasión y gusto de transformar el barro en un producto único</h2>
    </div>
 <div className="contacto">
 <h3> Para productos personalizados o consultas envianos un Email y te responderemos a la brevedad</h3>
 <form className="formContact">
 <input type='text' placeholder="Email" />
 
 <textarea></textarea>
 <button type='submit'>Enviar</button>
        </form>
 
 </div>
    </>
 )
}
export default  QuienesSomos;