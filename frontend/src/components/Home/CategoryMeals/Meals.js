import { NavLink } from "react-router-dom";

const Meals = ({category}) => {
  return (
    
   
    <section className="meals-wrapper">
      {category?.map((meal) => (
        <article className="meals-article" key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.title} />
          <div className="meals-info">
            <NavLink to={`/category/${meal.idMeal}`}>
              <h4>{meal.title.split(" ", 3)}...</h4>
            </NavLink>
            <span>{meal.Energi}</span>
          </div>
        </article>
      ))}
    </section>
  
  )
}

export default Meals