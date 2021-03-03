import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCar } from "../../stateManagemet/actions/reservaActions";
import { useRouter } from "next/router";

export default function Car({ car }) {
   const dispatch = useDispatch();
   const { reserva } = useSelector((state) => state);
   const router = useRouter();

   const { grupo_car, id, image, precioDia } = car;

   const handleClick = () => {
      dispatch(setCar(car));
      router.push("/reserva");
   };
   return (
      <div className="car row">
         <div className="col-md-4 car__row-img">
            <img src={image.url} alt={grupo_car.grupo} className="car__img" />
         </div>

         <div className="col-md-4 car__row-info">
            <p>Grupo {grupo_car.grupo} </p>
         </div>
         <div className="col-md-4 car__row-actions">
            <div className="car__row-price">
               <h4>Precio {precioDia * reserva.cantidadDias}€</h4>
               <small>precio por día {precioDia}€</small>
            </div>

            <Button
               type="primary"
               className="car__button"
               onClick={handleClick}
            >
               Continuar
            </Button>
         </div>
      </div>
   );
}
