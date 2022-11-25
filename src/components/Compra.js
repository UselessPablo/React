import React from 'react'


const Compra = ({ comprador }) => {


  return (
    <>
      {
        <div>
          <h2> Gracias  por tu compra: {comprador.name}</h2>
          <h2> Dirección de envio: {comprador.direccion}</h2>
          <h2>Teléfono:  {comprador.telefono}</h2>
          <h2> Email de contacto:  {comprador.email}</h2>
        </div>
      }

      <div className='center4'>Tu pedido se esta procesando</div>
    </>
  )
}

export default Compra