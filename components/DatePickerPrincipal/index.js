import { DatePicker, Input } from "antd";
import { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useLocale } from "../../hooks/useLocale";
import { useTranslate } from "../../hooks/useTraslate";
import { setDatesAction } from "../../stateManagemet/actions/reservaActions";

const { RangePicker } = DatePicker;

export default function DatePickerPrincipal() {
   const { locale, locales } = useLocale();
   const traslate = useTranslate();
   const [dates, setDates] = useState([]);
   const [hackValue, setHackValue] = useState();
   const [value, setValue] = useState();

   // INFORMACION QUE VA AL REDUCER CON LA FECHA DE SALIDA Y DE ENTRADA
   const [datesForm, setDatesForm] = useState(["", ""]);
   const dispatch = useDispatch();

   // const disabledDate = (current) => {
   //    if (!dates || dates.length === 0) {
   //       return false;
   //    }
   //    const tooLate = dates[0] && current.diff(dates[0], "days") > 30;
   //    const tooEarly = dates[1] && dates[1].diff(current, "days") > 30;
   //    return tooEarly || tooLate;
   // };

   useEffect(() => {
      dispatch(setDatesAction(datesForm));
   }, [datesForm]);

   const onOpenChange = (open) => {
      if (open) {
         setHackValue([]);
         setDates([]);
      } else {
         setHackValue(undefined);
      }
   };

   //TODO: en el el state dates tenemos las fechas de salida y entrada, ver videos de feranando de moment para tratarlo

   const handleDate = (e) => {
      const fechaSalida = moment(e[0]).format("DD-MM-YYYY");
      const fechaEntrada = moment(e[1]).format("DD-MM-YYYY");

      setDatesForm([fechaSalida, fechaEntrada]);
   };

   return (
      <div className="date-picker">
         {/* <div className="date-picker__label">
            <p>Salida</p>
            <p>Devolución</p>
         </div> */}

         <RangePicker
            //PARA QUE SOLO SE PUEDAN ELEGIR 30 DÍAS
            // value={hackValue || value}
            // disabledDate={disabledDate}
            onCalendarChange={(val) => setDates(val)}
            onOpenChange={onOpenChange}
            onChange={(val) => {
               setValue(val);
               handleDate(val);
            }}
            //DAR FORMATO A LA FECHA
            defaultValue={moment("03/01/2020", "DD/MM/YYYY")}
            format={"DD/MM/YYYY"}
            // showToday={true}
            placeholder={[
               traslate.DatePickerPrincipal?.fechaSalida,
               "Fecha de devolución",
            ]}
         />
      </div>
   );
}
