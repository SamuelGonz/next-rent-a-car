import { BASE_PATH } from "../utils/consts/variables";

export const getOfficesApi = async () => {
   try {
      const url = `${BASE_PATH}/offices`;

      const response = await fetch(url);
      const result = await response.json();

      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
};

export const getOficeByTypeApi = async (type) => {
   try {
      const url = `${BASE_PATH}/offices?type_office=airport`;

      const response = await fetch(url);
      const result = await response.json();

      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
};
