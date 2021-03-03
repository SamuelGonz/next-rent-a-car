export const genNumeroReserva = () => {
   const fecha = new Date().getTime();
   const mostrar = fecha.toString().substr(6, 7);
   const randon = Math.random() * (24 - 1) + 1;
   const letter = "ABCDEFGHIJKLMNOPQRSTUVWYZ".substr(randon, 1);

   const localizador = "ER" + mostrar + letter;

   return localizador;
};
