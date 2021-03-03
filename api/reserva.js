import { BASE_PATH } from "../utils/consts/variables";

export const createReservaApi = async (token, reserva) => {
   try {
      const url = `${BASE_PATH}/reservas`;
      const params = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ token, reserva }),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      console.log(result);
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
};

export const getReserva = async (email, referencia) => {
   try {
      const url = `${BASE_PATH}/reservas?email=${email}&referencia=${referencia}`;

      const response = await fetch(url);
      const result = await response.json();

      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
};

export const deleteReservaApi = async (id) => {
   try {
      const url = `${BASE_PATH}/reservas/${id}`;

      const params = {
         method: "DELETE",
         "Content-Type": "application/json",
      };
      const response = await fetch(url, params);
      const result = await response.json();

      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
};
