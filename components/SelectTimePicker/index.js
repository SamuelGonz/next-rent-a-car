import { Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTime } from "../../stateManagemet/actions/reservaActions";
import { minutos, horas } from "../../utils/consts/horas-minutos";

const { Option } = Select;

export default function SelectTimePicker() {
   const [horaSalida, setHoraSalida] = useState(horas[10]);
   const [horaDevolucion, setHoraDevolucion] = useState(horas[10]);

   const [minutosSalida, setMinutosSalida] = useState(minutos[0]);
   const [minutosDevolucion, setMinutosDevolucion] = useState(minutos[0]);

   const dispatch = useDispatch();

   useEffect(() => {
      //Lanamos el dispatch con un array, en la primera posicion hora y minutos de salida y segunda poscion las de devolucion
      dispatch(
         setTime([
            `${horaSalida}:${minutosSalida}`,
            `${horaDevolucion}:${minutosDevolucion}`,
         ])
      );
   }, [horaSalida, horaDevolucion, minutosSalida, minutosDevolucion]);

   const handleHoraSalida = (e) => {
      setHoraSalida(e);
   };
   const handleMinutosSalida = (e) => {
      setMinutosSalida(e);
   };

   const handleHoraDevolucion = (e) => {
      setHoraDevolucion(e);
   };
   const handleMinutosDevolucion = (e) => {
      setMinutosDevolucion(e);
   };

   return (
      <div className="select-time">
         <div className="select-time__salida">
            <Select
               className="select-time__salida-hora"
               style={{ width: 200 }}
               defaultValue={horaSalida}
               onChange={handleHoraSalida}
            >
               {horas.map((hora) => (
                  <Option value={hora} key={hora}>
                     {hora}
                  </Option>
               ))}
            </Select>

            <Select
               className="select-time__salida-minuto"
               style={{ width: 200 }}
               defaultValue={minutosSalida}
               onChange={handleMinutosSalida}
            >
               {minutos.map((minutos) => (
                  <Option value={minutos} key={minutos}>
                     {minutos}
                  </Option>
               ))}
            </Select>
         </div>

         <div className="select-time__devolucion">
            <Select
               className="select-time__salida-hora"
               style={{ width: 200 }}
               defaultValue={horaDevolucion}
               onChange={handleHoraDevolucion}
            >
               {horas.map((hora) => (
                  <Option value={hora} key={hora}>
                     {hora}
                  </Option>
               ))}
            </Select>

            <Select
               className="select-time__salida-minuto"
               style={{ width: 200 }}
               defaultValue={minutosDevolucion}
               onChange={handleMinutosDevolucion}
            >
               {minutos.map((minutos) => (
                  <Option value={minutos} key={minutos}>
                     {minutos}
                  </Option>
               ))}
            </Select>
         </div>
      </div>
   );
}
