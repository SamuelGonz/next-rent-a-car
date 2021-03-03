import { BASE_PATH } from "../utils/consts/variables";

export const getFagsApi = async () => {
   try {
      const url = `${BASE_PATH}/faqs`;

      const response = await fetch(url);
      const retult = await response.json();

      return retult;
   } catch (error) {
      console.log(error);
      return null;
   }
};
