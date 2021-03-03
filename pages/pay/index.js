import Header from "../../layout/Header";
import Payment from "../../components/Payment";
import { genNumeroReserva } from "../../utils/genNumeroReserva";
import { useSelector } from "react-redux";

import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

export default function Pay() {
   const referencia = genNumeroReserva();

   const driver = useSelector((state) => state.driver);
   const reserva = useSelector((state) => state.reserva);

   //    cantidadDias: 3
   // fechaDevolucion: "19-02-2021"
   // fechaSalida: "16-02-2021"
   // grupoCar: {_id: "601a809cab68ec0aa9e8b8d6", published_at: "2021-02-03T10:53:22.317Z", createdAt: "2021-02-03T10:53:16.606Z", updatedAt: "2021-02-03T10:54:57.084Z", __v: 0, …}
   // horaDevolucion: "11:00"
   // horaSalida: "13:00"
   // oficinaDevolucion: "Aer. Gran Canaria"
   // oficinaSalida: "Aer. Gran Canaria"
   // payButton: false

   //    email: "1@1.com"
   // lastname: "gon"
   // name: "samuel"
   // phone: "999999"
   // terminos: true
   return (
      <>
         <Header />
         <div className="container">
            <div className="pay">
               <div className="pay__info">
                  <div className="pay__info-driver ">
                     <p>Ref: {referencia}</p>
                     <p>
                        {driver.name} {driver.lastname}
                     </p>
                     <p>
                        <MailOutlined /> {driver.email} - <PhoneOutlined />{" "}
                        {driver.phone}
                     </p>
                     <p>Grupo {reserva.grupoCar.grupo_car.grupo} </p>
                  </div>
                  <div className="pay__info-reserva">
                     <p>
                        {reserva.oficinaSalida} {">"}{" "}
                        {reserva.oficinaDevolucion}{" "}
                     </p>
                     <p>
                        {reserva.fechaSalida} {">"} {reserva.fechaDevolucion}{" "}
                     </p>
                     <p>
                        {reserva.horaSalida} {">"} {reserva.horaDevolucion}{" "}
                     </p>
                     <p className="pay__info-precio">
                        Total:{" "}
                        {reserva.cantidadDias * reserva.grupoCar.precioDia}€
                     </p>
                  </div>
               </div>
            </div>

            <Payment referencia={referencia} />
         </div>
      </>
   );
}
