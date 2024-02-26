import { FOOD_RESPONSES } from "../constants";

const {VITE_API_KEY , VITE_API_URL} = import.meta.env;

export const getFood = async(query) =>{

   try {
      const res =  await fetch(`${VITE_API_URL}/complexSearch?apiKey=${VITE_API_KEY}&query=${query}`);
      console.log("reponse",res)
      if(!res.ok)
      {
        
          if(FOOD_RESPONSES[res.status])
          throw new Error(FOOD_RESPONSES[res.status]);
         
          else
          throw new Error('some error occured');
      }

      const data = await res.json();

      if(!data.totalResults)
      {
         throw new Error(FOOD_RESPONSES['404'])
      }

      return {success : true, data : data.results}

   } catch (error) {
      alert(error.message)
      return {success : false, error : error.message};
    }
}