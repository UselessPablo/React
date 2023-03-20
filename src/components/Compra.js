import React from "react";


const Compra = ({ comprador }) => {
  return (
    <>
      {
        <div className='space2'>
          <h3> Gracias por tu compra: {comprador.Nombre}</h3>
          <h3> Dirección de envio: {comprador.dirección}</h3>
          <h3>Teléfono: {comprador.Teléfono}</h3>
          <h3> Email de contacto: {comprador.email}</h3>
        </div>
      }
      <div className="center4">Tu pedido se esta procesando</div>
    </>
  );
};

export default Compra;
