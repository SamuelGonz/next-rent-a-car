import { useSelector } from "react-redux";
import { RightOutlined } from "@ant-design/icons";
import { map } from "lodash";
import Car from "../Car";

export default function Cars({ cars }) {
   console.log(cars);
   const { reserva } = useSelector((state) => state);

   const {
      cantidadDias,
      fechaDevolucion,
      fechaSalida,
      horaDevolucion,
      horaSalida,
      oficinaDevolucion,
      oficinaSalida,
   } = reserva;

   return (
      <div className="container">
         <div className="row">
            <div className="col-2 d-none d-lg-block"></div>
            <div className="col-6 col-lg-4 cars__info">
               <h5>Recogida</h5>
               <p>{oficinaSalida}</p>
               <p>
                  {fechaSalida} - {horaSalida}
               </p>
            </div>
            <div className="col-lg-1 d-none d-lg-flex flex-column cars__icon">
               <RightOutlined />
               <small className="mt-1">{cantidadDias} días</small>
            </div>
            <div className="col-6 col-lg-4 cars__info">
               <h5>Devolución</h5>
               <p>{oficinaDevolucion}</p>
               <p>
                  {fechaDevolucion} - {horaDevolucion}
               </p>
            </div>
         </div>
         <div className="cars__cars">
            {map(cars, (car) => (
               <Car key={car.id} car={car} />
            ))}
         </div>
      </div>
   );
}
