import React from "react";
import { useNavigate } from "react-router-dom";

const Pagenotfount = () => {
  const navigate = useNavigate();

  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <button onClick={refreshPage}>Go back</button>
    </div>
  );
};

export default Pagenotfount;
