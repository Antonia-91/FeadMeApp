import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CategoryMeal = () => {
 
  const navigate = useNavigate();

  // get id from URL
  let { id } = useParams();
  console.log(id)

  return (
    <div>
      Comming soon...
      <button onClick={() => navigate(-1)}> go back </button>
    </div>
  );
};

export default CategoryMeal;
