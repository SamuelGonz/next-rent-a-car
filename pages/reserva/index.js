import Header from "../../layout/Header";
import { useSelector } from "react-redux";
import FormDriver from "../../components/FormDriver";
import { useRouter } from "next/router";
import Steps from "../../components/Steps";
import { useEffect } from "react";
import DetailsReserva from "../../components/DetailsReserva";
import Payment from "../../components/Payment";

export default function reserva() {
   const {
      oficinaSalida,
      oficinaDevolucion,
      fechaSalida,
      fechaDevolucion,
      horaSalida,
      horaDevolucion,
      cantidadDias,
      grupoCar,
   } = useSelector((state) => state.reserva);

   const router = useRouter();

   //Comprobar que hay cantidad de días
   // useEffect(() => {
   //    if (grupoCar === null || cantidadDias === "") {
   //       return router.push("/");
   //    }
   // }, []);

   return (
      <>
         <Header />

         <div className="reserva container">
            <div className="reserva__steps">
               <Steps />
            </div>
            <h3 className="reserva__title">Datos del conductor</h3>

            <div className="row">
               <div className="col-12 col-md-4 col-lg-3 reserva__details">
                  <DetailsReserva
                     oficinaSalida={oficinaSalida}
                     oficinaDevolucion={oficinaDevolucion}
                     fechaSalida={fechaSalida}
                     fechaDevolucion={fechaDevolucion}
                     horaSalida={horaSalida}
                     horaDevolucion={horaDevolucion}
                     cantidadDias={cantidadDias}
                  />

                  <div className="reserva__details-car">
                     <img src={grupoCar?.image.url} alt="" />
                  </div>

                  <div className="reserva__details-price">
                     <h4>Precio {cantidadDias * grupoCar?.precioDia}€</h4>
                  </div>
               </div>
               <div className="col-12 col-md-8 col-lg-9">
                  <FormDriver />
               </div>
            </div>
         </div>
      </>
   );
}
