import { NavLink } from "react-router-dom";


const CategoryWrapper = () => {
  return (
    <>
      <NavLink className="nav-links" to="/breakfast">
        <article className="category-article brekker">
          <h2>Brekker</h2>
        </article>
      </NavLink>
      <NavLink className="nav-links" to="/lunch">
        <article className="category-article lunch">
          <h2>Lunch</h2>
        </article>
      </NavLink>
      <NavLink className="nav-links" to="/dinner">
        <article className="category-article dinner">
          <h2>Dinner</h2>
        </article>
      </NavLink>
      <NavLink className="nav-links" to="/baking">
        <article className="category-article baking">
          <h2>Baking</h2>
        </article>
      </NavLink>
    </>
  );
};

export default CategoryWrapper;
