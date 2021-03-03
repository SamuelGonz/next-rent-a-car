export default function DetailsReserva({
   oficinaSalida,
   oficinaDevolucion,
   fechaSalida,
   fechaDevolucion,
   horaSalida,
   horaDevolucion,
   cantidadDias,
}) {
   return (
      <div className="details-reserva">
         <h5>Resumen</h5>
         <p>
            {oficinaSalida} {">"} {oficinaDevolucion}
         </p>
         <p>
            {fechaSalida} {">"} {fechaDevolucion}
         </p>
         <p>
            {horaSalida} {">"} {horaDevolucion}
         </p>
         <p>Días {cantidadDias}</p>
      </div>
   );
}
