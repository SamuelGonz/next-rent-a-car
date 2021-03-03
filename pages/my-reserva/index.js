import { Form, Input, Button, Spin, notification } from "antd";
import { useEffect, useState } from "react";
import { deleteReservaApi, getReserva } from "../../api/reserva";
import Header from "../../layout/Header";
import { size } from "lodash";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function index() {
   const [reserva, setReserva] = useState(null);
   const [showSpin, setShowSpin] = useState(false);
   const [disableButton, setDisableButton] = useState(false);
   const router = useRouter();
   const { query } = router;
   const [formValues, setFormValues] = useState({
      email: "",
      referencia: "",
   });

   useEffect(() => {
      setShowSpin(true);

      if (!query.email || query.email === "") {
         setShowSpin(false);
         return;
      }

      if (!query.referencia || query.referencia === "") {
         setShowSpin(false);
         return;
      }

      getReserva(query.email, query.referencia).then((res) => {
         console.log(res);
         setReserva(res || []);
      });
      setShowSpin(false);
   }, [query]);

   const deleteReserva = () => {
      setDisableButton(true);
      Swal.fire({
         title: "¿Esta segur@ de que desea eliminar la reserva?",
         text: "Una vez eliminada no se puede volver a recuperar",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Sí, eliminar",
      }).then((result) => {
         if (result.isConfirmed) {
            deleteReservaApi(reserva[0].id)
               .then(() => {
                  notification.info({
                     message: `Reserva Eliminada`,
                     description:
                        "La reserva ha sido eliminada, pronto recibira un email con su cancelación.",
                  });

                  router.push("/");
               })
               .catch((err) => {
                  notification.info({
                     message: `Error al eliminar`,
                     description:
                        "Ha ocurrido un error al eliminar la reserva, vuelva a intentarlo más tarde.",
                  });
               });
         }
      });
      setDisableButton(false);
   };

   const handleSubmit = (e) => {
      if (
         formValues.referencia.trim() === "" ||
         formValues.referencia.length < 4
      ) {
         return;
      }

      if (formValues.email.trim() === "" || formValues.email.length < 4) {
         return;
      }

      router.push({
         pathname: "/my-reserva",
         query: {
            email: formValues.email,
            referencia: formValues.referencia,
         },
      });
   };
   return (
      <>
         <Header />
         <div className="my-reserva">
            <h2 className="my-reserva__title">Gestiona tú reserva</h2>

            <div className="container">
               <div className="row">
                  {reserva === null && (
                     <div>
                        <Spin size="large" />
                     </div>
                  )}
                  {/* MOSTRAMOS FORMULARIO SI NO HA ENCONTRADO NINGUNA RESERVA */}
                  {size(reserva) === 0 && (
                     <div className="col-12 col-md-10 col-lg-8 my-reserva__container">
                        <Form onFinish={handleSubmit}>
                           <Input
                              placeholder="Email"
                              className="my-reserva__input"
                              value={formValues.email}
                              onChange={(e) =>
                                 setFormValues({
                                    ...formValues,
                                    email: e.target.value,
                                 })
                              }
                              name="email"
                           />
                           <Input
                              placeholder="Referencia"
                              className="my-reserva__input"
                              value={formValues.referencia}
                              onChange={(e) =>
                                 setFormValues({
                                    ...formValues,
                                    referencia: e.target.value,
                                 })
                              }
                              name="referencia"
                           />

                           <Button
                              htmlType="submit"
                              className="my-reserva__btn"
                           >
                              Buscar
                           </Button>
                        </Form>
                     </div>
                  )}

                  {/* MOSTRAMOS RESERVA ENCONTRADA Y DESACTIVAMOS FORMULARIO */}

                  {size(reserva) !== 0 && (
                     <div className="col-12 col-md-10 col-lg-8 my-reserva__info">
                        <div>
                           <p>Referencia {reserva[0].referencia}</p>
                           <p>
                              {reserva[0].nombreConductor} {reserva[0].lastName}
                           </p>
                           <p>
                              {reserva[0].email} - {reserva[0].phone}
                           </p>
                           <div>
                              <p>
                                 {reserva[0].oficinaSalida}{" "}
                                 {reserva[0].fechaSalida}{" "}
                                 {reserva[0].horaSalida}
                              </p>
                           </div>

                           <div>
                              <p>
                                 {reserva[0].oficinaDevolucion}{" "}
                                 {reserva[0].fechaDevolucion}{" "}
                                 {reserva[0].horaDevolucion}
                              </p>
                           </div>

                           <div>
                              <span>{reserva[0].cantidadDias} días, </span>
                              <span>Total {reserva[0].precio}€ </span>
                           </div>
                        </div>
                        <div className="my-reserva__info-actions">
                           <img
                              src={reserva[0].car.image.url}
                              alt={reserva[0].car.image.name}
                           />
                           <button
                              onClick={deleteReserva}
                              className="my-reserva__info-btn"
                              disabled={disableButton}
                           >
                              Eliminar
                           </button>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </>
   );
}
