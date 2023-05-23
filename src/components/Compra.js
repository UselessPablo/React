import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Compra = ({ comprador }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 6000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <>
      <div className="space2">
        <h3>Gracias por tu compra: {comprador.Nombre}</h3>
        <h3>Dirección de envío: {comprador.dirección}</h3>
        <h3>Teléfono: {comprador.Teléfono}</h3>
        <h3>Email de contacto: {comprador.email}</h3>
      </div>
      <div className="center4">Tu pedido se está procesando</div>
    </>
  );
};

export default Compra;
