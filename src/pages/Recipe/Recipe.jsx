import React, { useEffect, useState } from 'react'
import Content from '../../components/Content/Content'
import { useParams } from 'react-router-dom'
import { getRecipe } from '../../api/get-recipe'
import './Recipe.css'
import IngridientCard from '../../components/IngridientCard/IngridientCard'


const Recipe = ({error,setError}) => {

  const [recipeData , setRecipeData] = useState(null);
  const [ingridients ,setIngridients] = useState([])
  const {id} = useParams();

  useEffect(()=>{
    (async() =>{
      const res = await getRecipe(id);
      if (res.success){
          setError(null);

          setRecipeData(res.data);

          const ingridientsList = Array.from(new Set(res.data?.extendedIngredients
                                      ?.map(obj => obj.name)))
                                      ?.map(name =>res.data?.extendedIngredients
                                      ?.find(obj => obj?.name === name));
          setIngridients(ingridientsList);
      }
      else{
          setError(res.error);
          alert(res.error);
      }
    })()
  },[])
  return (
    <Content>
       <div className='Recipe'>
        {
          recipeData 
          && 
          <>
           <h1>{recipeData.title}</h1>
           <div className="recipe-banner">
            <div className='food-image-container'>
              <img src={recipeData.image} alt={recipeData.title} />
            </div>
            <ul className='recipe-details'>
                <li>Time to prepare : {recipeData.readyInMinutes} Minutes</li>
                <li>Serves :  {recipeData.servings} </li>
                <li>{recipeData.vegetarian ? "🥬 Vegetarian" : " 🍖 Non-Vegetarian"}</li>
                <li>{recipeData.vegan ? "Vegan" : "Non-Vegan"}</li>
                <li>Price per serving : $ {(recipeData.pricePerServing/83).toFixed(2)}</li>
            </ul>
           </div>
           <div className='ingridients'>
            <h1>Ingridients</h1>
            <div className='ingridients-list'>
              {
                ingridients.length>0 &&  ingridients.map((item)=><IngridientCard ingName={item.name} ingImg={item.image} />)
              }
            </div>
           </div>
           <ol className='recipe-instructions'>
            <h1>Instructions</h1>
            {
              recipeData.analyzedInstructions[0].steps.map((step)=><li key={step.number}>{step.step}</li>)
            }
           </ol>
          </>
        }
       
       </div>
    </Content>
  )
}

export default Recipe