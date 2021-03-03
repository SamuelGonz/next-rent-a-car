import { Button, message, notification } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { createReservaApi } from "../../../api/reserva";
import { setReferencia } from "../../../stateManagemet/actions/reservaActions";

export default function FormPayment({ referencia }) {
   const [loading, setLoading] = useState(false);
   const stripe = useStripe();
   const elements = useElements();
   const state = useSelector((state) => state);
   const dispatch = useDispatch();

   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      const reserva = {
         referencia,
         oficinaSalida: state.reserva.oficinaSalida,
         oficinaDevolucion: state.reserva.oficinaDevolucion,
         fechaSalida: state.reserva.fechaSalida,
         fechaDevolucion: state.reserva.fechaDevolucion,
         horaSalida: state.reserva.horaSalida,
         horaDevolucion: state.reserva.horaDevolucion,
         cantidadDias: state.reserva.cantidadDias,
         nombreConductor: state.driver.name,
         lastName: state.driver.lastname,
         phone: state.driver.phone,
         email: state.driver.email,
         car: state.reserva.grupoCar.id,
         precio: state.reserva.cantidadDias * state.reserva.grupoCar.precioDia,
      };

      if (!stripe || !elements) {
         setLoading(false);
         return;
      }

      const cardElement = elements.getElement(CardElement);
      const result = await stripe.createToken(cardElement);

      if (result.error) {
         setLoading(false);
         notification.error({
            message: "Error",
            description:
               "Ha ocurrido un error al proceder el pago. Revise los datos de la tarjeta y/o el código postal",
         });
      } else {
         dispatch(setReferencia(referencia));
         createReservaApi(result, reserva);
         router.replace("/thanks");
      }
   };
   return (
      <form className="payment__form" onSubmit={handleSubmit}>
         <CardElement />

         <Button
            htmlType="submit"
            className="btn-pagar"
            // disabled={false}
            loading={loading}
         >
            Pagar
         </Button>
      </form>
   );
}
