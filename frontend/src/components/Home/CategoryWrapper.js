import { NavLink } from "react-router-dom";

const CategoryWrapper = () => {
  return (
    <>
      <article className="category-article brekker">
        <NavLink className="nav-links" to="/breakfast">
          <h2>Brekker</h2>
        </NavLink>
      </article>
      <article className="category-article lunch">
        <NavLink className="nav-links" to="/lunch">
          <h2>Lunch</h2>
        </NavLink>
      </article>
      <article className="category-article dinner">
        <NavLink className="nav-links" to="/dinner">
          <h2>Dinner</h2>
        </NavLink>
      </article>
      <article className="category-article baking">
        <NavLink className="nav-links" to="/baking">
          <h2>Baking</h2>
        </NavLink>
      </article>
    </>
  );
};

export default CategoryWrapper;
