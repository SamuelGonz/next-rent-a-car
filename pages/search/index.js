import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarsApi } from "../../api/cars";
import { useRouter } from "next/router";
import Header from "../../layout/Header";
import Cars from "../../components/Cars";

export default function Search() {
   const [cars, setCars] = useState([]);
   const dispatch = useDispatch();
   const router = useRouter();

   const { reserva } = useSelector((state) => state);

   //
   //Traer los vehículos
   useEffect(() => {
      getCarsApi().then((res) => setCars(res));
   }, []);

   //Comprobar que hay cantidad de días
   useEffect(() => {
      if (reserva.cantidadDias === 0 || reserva.cantidadDias === "") {
         return router.push("/");
      }
   }, []);

   return (
      <>
         <Header />
         <div className="search">
            <Cars cars={cars} />
         </div>
      </>
   );
}
