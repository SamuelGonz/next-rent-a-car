import { BASE_PATH } from "../utils/consts/variables";

export const searchPrices = async () => {
   try {
      const url = `${BASE_PATH}/cars`;

      const response = await fetch(url);
      const result = await response.json();

      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
};
