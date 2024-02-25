import { RECIPE_RESPONSES } from "../constants";

const {VITE_API_KEY , VITE_API_URL} = import.meta.env;

export const getRecipe = async(id) =>{

   try {
      const res =  await fetch(`${VITE_API_URL}/${id}/information?apiKey=${VITE_API_KEY}`);

      if(!res.ok)
      {
         if(RECIPE_RESPONSES[res.status])
          throw new Error(RECIPE_RESPONSES[res.status]);

          else
          throw new Error('some error occured');
      }
      
      const data = await res.json();

      return {success : true, data : data}

   } catch (error) {
       alert(error.message)
      return {success : false, error : error.message};
    }
}