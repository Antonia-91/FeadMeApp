import React, { useState, useEffect } from "react";
import { useNavigate, NavLink, useParams } from "react-router-dom";

const CategoryMeal = () => {
  const [meal, setMeal] = useState();
  const navigate = useNavigate();

  // get id from URL
  let { id } = useParams();

  return (
    <div>
      Comming soon...
      <button onClick={() => navigate(-1)}> go back </button>
    </div>
  );
};

export default CategoryMeal;
