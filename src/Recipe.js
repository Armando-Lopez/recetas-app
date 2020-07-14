import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, img, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((item, i) => (
          <li key={i}>{item.text}</li>
        ))}
      </ol>
      <p>Calories: {Math.round(calories)}</p>
      <img className={style.image} src={img} alt={title} />
    </div>
  );
};

export default Recipe;
