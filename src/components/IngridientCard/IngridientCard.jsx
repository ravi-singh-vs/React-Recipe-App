import './IngridientCard.css'
const IngridientCard = ({ingName,ingImg}) =>{
    const imgUrl =  `https://spoonacular.com/cdn/ingredients_100x100/${ingImg}`
    return (
      <div className='ingridient-card'>
        <div>
          <img src={imgUrl} alt={ingName} />
        </div>
        <h3>{ingName}</h3>
      </div>
    )
  }
  export default IngridientCard;