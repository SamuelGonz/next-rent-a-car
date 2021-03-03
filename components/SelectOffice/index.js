import { Select, Badge, Checkbox } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { getOfficesApi } from "../../api/offices";
import { map } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { searchOffice } from "../../stateManagemet/actions/reservaActions";

const { Option } = Select;

export default function SelectOffice() {
   const [offices, setOffices] = useState([]);
   const [officeReturnDifferent, setOfficeReturnDifferent] = useState(false);
   const [officeSalida, setOfficeSalida] = useState("");
   const [officeEntrada, setOfficeEntrada] = useState();
   const dispatch = useDispatch();

   //Traer las oficinas de la API
   useEffect(() => {
      getOfficesApi().then((res) => setOffices(res));
   }, []);

   //Guardar en redux las oficinas seleccionadas
   useEffect(() => {
      const selectOffices = (os, oe) => {
         const offices = [os, oe];

         dispatch(searchOffice(offices));
      };
      selectOffices(officeSalida, officeEntrada);
   }, [officeSalida, officeEntrada]);

   const onChangePrincipal = (value) => {
      setOfficeSalida(value);
   };

   const onChangeSecundario = (value) => {
      setOfficeEntrada(value);
   };

   return (
      <div className="select-office">
         <div className="select-office__ofice">
            <Select
               showSearch
               style={{ width: 200 }}
               placeholder="Lugar de recogida..."
               optionFilterProp="children"
               onChange={onChangePrincipal}
               filterOption={(input, option) => {
                  // option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  // 0
               }}
            >
               {map(offices, (office) => {
                  const icon =
                     office.type_office.tipo === "airport" ? (
                        <Badge
                           count={"aeropuerto"}
                           style={{ backgroundColor: "#394760" }}
                        />
                     ) : (
                        <Badge
                           count={"ciudad"}
                           style={{ backgroundColor: "#45d5a4" }}
                        />
                     );

                  return (
                     <Option key={office.id} value={office.nombre}>
                        {icon} {office.nombre}
                     </Option>
                  );
               })}
               {/* <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option> */}
            </Select>
         </div>
         <div className="select-office__checkbox">
            <Checkbox
               onChange={(e) => setOfficeReturnDifferent(e.target.checked)}
               className="select-office__checkbox-box"
            />
            Devolver el vehículo en una oficina distinta
         </div>

         {officeReturnDifferent && (
            <div className="select-office__ofice">
               <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Lugar de recogida..."
                  optionFilterProp="children"
                  onChange={onChangeSecundario}
                  filterOption={
                     (input, option) => option.children
                     // .toLowerCase()
                     // .indexOf(input.toLowerCase()) >= 0
                  }
               >
                  {map(offices, (office) => {
                     const icon =
                        office.type_office.tipo === "airport" ? (
                           <Badge
                              count={"aeropuerto"}
                              style={{ backgroundColor: "#394760" }}
                           />
                        ) : (
                           <Badge
                              count={"ciudad"}
                              style={{ backgroundColor: "#45d5a4" }}
                           />
                        );

                     return (
                        <Option key={office.id} value={office.nombre}>
                           {icon} {office.nombre}
                        </Option>
                     );
                  })}
               </Select>
            </div>
         )}
      </div>
   );
}
