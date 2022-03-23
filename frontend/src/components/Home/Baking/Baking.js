import React from "react";

const Baking = ({ category }) => {
  console.log(category);
  return (
    <main className="baking-main">
      <h2>Baking</h2>
      <section className="baking-wrapper">
        {/* {category.baking?.map((meal) => {
          <article className="maels-article" key={meal.id}>
            <h2>{meal.title}</h2>
          </article>;
        })} */}
      </section>
    </main>
  );
};

export default Baking;
