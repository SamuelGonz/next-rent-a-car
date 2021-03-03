import Header from "../../layout/Header";
import { Result, Button } from "antd";
import { useSelector } from "react-redux";
import Link from "next/link";
export default function Thanks() {
   const { referencia } = useSelector((state) => state.reserva);
   return (
      <>
         <Header />
         <div className="thanks">
            <div className="container">
               <Result
                  status="success"
                  title="Gracias por reservar con nosotros, recibirá un correo con su reserva"
                  subTitle={`Referencia: ${referencia}`}
                  extra={[
                     <Link href="/">
                        <a>
                           <Button key="inicio" className="thanks__btn">
                              Volver al inicio
                           </Button>
                        </a>
                     </Link>,
                  ]}
               />
            </div>
         </div>
      </>
   );
}
