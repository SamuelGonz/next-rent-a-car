import SelectOffice from "../SelectOffice";
import DatePickerPrincipal from "../DatePickerPrincipal";
import SelectTimePicker from "../SelectTimePicker";
import { Button, Alert, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import moment from "moment";
import { setCountDays } from "../../stateManagemet/actions/reservaActions";
import { RightOutlined } from "@ant-design/icons";

import { useRouter } from "next/router";

export default function FormSearchPrices() {
   const [formError, setFormError] = useState(false);
   const { reserva } = useSelector((state) => state);
   const dispatch = useDispatch();
   const router = useRouter();

   const {
      fechaDevolucion,
      fechaSalida,
      horaDevolucion,
      horaSalida,
      oficinaDevolucion,
      oficinaSalida,
   } = reserva;
   // useEffect(() => {
   //    // if (
   //    //    fechaDevolucion === "" ||
   //    //    fechaSalida === "" ||
   //    //    horaDevolucion === "" ||
   //    //    horaSalida === "" ||
   //    //    oficinaDevolucion === "" ||
   //    //    oficinaSalida === ""
   //    // ) {
   //    //    setActiveButton(true);
   //    // } else {
   //    //    setActiveButton(true);
   //    // }
   // }, [
   //    fechaDevolucion,
   //    fechaSalida,
   //    horaDevolucion,
   //    horaSalida,
   //    oficinaDevolucion,
   //    oficinaSalida,
   // ]);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (
         fechaDevolucion === "" ||
         fechaSalida === "" ||
         horaDevolucion === "" ||
         horaSalida === "" ||
         oficinaDevolucion === "" ||
         oficinaSalida === ""
      ) {
         setFormError(true);
         // setTimeout(() => {
         //    setFormError(false);
         // }, 3000);
         return;
      } else {
         setFormError(false);
      }

      //TODO: LOGICA PARA SACAR LA CANTIDAD DE DIAS Y HACER LA BUSQUEDA A LA API

      //Tenia que haber cambiado el formato de como se guarda en el reducer el formato de la fecha, por eso tengo que destructurarlo aquí y volver a darle el formato de moment

      const destruSalida = fechaSalida.split("-");

      const consultaSalida = moment(
         `${destruSalida[1]}-${destruSalida[0]}-${destruSalida[2]}` +
            " " +
            horaSalida
      );

      const destruDevolucion = fechaDevolucion.split("-");

      const consultaDevolucion = moment(
         `${destruDevolucion[1]}-${destruDevolucion[0]}-${destruDevolucion[2]}` +
            " " +
            horaDevolucion
      );

      //TODO: EXTRAR LOGICA A SCRIPTS UTILS?
      //Ver cantidad de dias con decimales
      let cantidadDays = consultaDevolucion.diff(consultaSalida, "hours") / 24;
      cantidadDays = Math.ceil(cantidadDays);

      //Ver decimales para ver si se le da una hora de gratificacion
      // const verDecimales = cantidadDays.toString().split(".")[1];

      // if (verDecimales > "042") {
      //    cantidadDays = cantidadDays + 1;
      // }

      dispatch(setCountDays(cantidadDays));

      //Redirigimos a buscar precios
      router.push("/search");
   };

   return (
      <div className="form-search">
         <div className="form-search__ofice">
            <SelectOffice />
         </div>
         <div className="form-search__date">
            <DatePickerPrincipal />
         </div>
         <div className="form-search__time">
            <SelectTimePicker />
         </div>
         <form onSubmit={handleSubmit} className="form-search__form">
            {formError && (
               <div className="form-search__form-error">
                  <Tooltip
                     placement="left"
                     color="red"
                     defaultVisible={true}
                     visible={true}
                     title={
                        <span>
                           <RightOutlined />
                        </span>
                     }
                  >
                     <Alert
                        message="Todos los campos son obligatorios"
                        type="error"
                     />
                  </Tooltip>
               </div>
            )}

            <Button className="form-search__btn" htmlType="submit">
               Buscar
            </Button>
         </form>
      </div>
   );
}
