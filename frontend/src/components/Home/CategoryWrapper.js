import { NavLink } from "react-router-dom";

/// -- images ---///
import baking from "./images/baking.jpg";
import brunch from "./images/brekker.jpg";
import lunch from "./images/lunch.jpg";
import dinner from "./images/dinner.jpg";

const CategoryWrapper = () => {
  return (
    <>
      <NavLink className="nav-links" to="/breakfast">
        <article className="category-article brekker">
          <h2>Brekker</h2>
          {/* <img
            id="breakfast"
            src={brunch}
            width="200"
            height="200"
            alt="avocado sandwish"
            style={{ borderRadius: "20px" }}
          /> */}
        </article>
      </NavLink>
      <NavLink className="nav-links" to="/lunch">
        <article className="category-article lunch">
          <h2>Lunch</h2>
          {/* <img
            id="lunch"
            src={lunch}
            width="200"
            height="200"
            alt="spagetti and tomato dish"
            style={{ borderRadius: "20px" }}
          /> */}
        </article>
      </NavLink>
      <NavLink className="nav-links" to="/dinner">
        <article className="category-article dinner">
          <h2>Dinner</h2>
          {/* <img
            id="dinner"
            src={dinner}
            width="200"
            height="200"
            alt="bown with shripms"
            style={{ borderRadius: "20px" }}
          /> */}
        </article>
      </NavLink>
      <NavLink className="nav-links" to="/baking">
        <article className="category-article baking">
          <h2>Baking</h2>
          {/* <img
            id="baking"
            src={baking}
            width="200"
            height="200"
            alt="choklet"
            style={{ borderRadius: "20px" }}
          /> */}
        </article>
      </NavLink>
    </>
  );
};

export default CategoryWrapper;
