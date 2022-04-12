import React from "react";

const Pagenotfount = () => {
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
