import { Carousel as CarouselAntD } from "antd";
import { useEffect, useState } from "react";
import { getCarsApi } from "../../api/cars";
import { map } from "lodash";

export default function Carousel() {
   const [cars, setCars] = useState([]);
   useEffect(() => {
      getCarsApi().then((res) => setCars(res));
   }, []);

   return (
      <div className="carousel">
         <h1>Nuestra Flota</h1>
         <div className="carousel__container">
            <CarouselAntD autoplay className="carousel__carousel">
               {map(cars, (car) => (
                  <div key={car.id}>
                     <img src={car.image.url} alt={car.grupo_car.grupo} />
                  </div>
               ))}
            </CarouselAntD>
         </div>
      </div>
   );
}
