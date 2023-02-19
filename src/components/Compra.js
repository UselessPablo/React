import React from "react";

const Compra = ({ comprador }) => {
  return (
    <>
      {
        <div className='space2'>
          <h2> Gracias por tu compra: {comprador.Nombre}</h2>
          <h2> Dirección de envio: {comprador.dirección}</h2>
          <h2>Teléfono: {comprador.Teléfono}</h2>
          <h2> Email de contacto: {comprador.email}</h2>
        </div>
      }

      <div className="center4">Tu pedido se esta procesando</div>
    </>
  );
};

export default Compra;
