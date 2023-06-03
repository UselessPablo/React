import { useNavigate } from "react-router-dom";
// import { useMercadoPago } from "mercadopago-v2-react";
import { useEffect, useState } from "react";

const Compra = ({ comprador}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 6000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  // const mercadopago = useMercadoPago("v2", "APP_USR-6dabd508-9a68-4a8a-b453-9c398463d944", {
  //   locale: "es-AR"
  // });

  // const [rendered, setRendered] = useState(false);

  // useEffect(() => {
  //   if (mercadopago && !rendered) {
  //     mercadopago.checkout({
  //       preference: {
  //         id: "data.id"
  //       },
  //       render: {
  //         container: ".cho-container",
  //         label: "Pagar"
  //       }
  //     });
  //     setRendered(true);
  //   }
  // }, [mercadopago, rendered]);

  return (
    <>
      <div className="space2">
        <h3>Gracias por tu compra: {comprador.Nombre}</h3>
        <h3>Dirección de envío: {comprador.dirección}</h3>
        <h3>Teléfono: {comprador.Teléfono}</h3>
        <h3>Email de contacto: {comprador.email}</h3>
      </div>
      <div className="cho-container" />
      <div className="center4">Tu pedido se está procesando</div>
    </>
  );
};

export default Compra;
