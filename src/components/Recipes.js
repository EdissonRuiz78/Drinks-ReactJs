import React, { useContext } from "react";
import { ContextIngredients } from "../context/ContextIngredients";
import Recipe from "./Recipe";

const Recipes = () => {
  const { ingredients } = useContext(ContextIngredients);

  return (
    <div className="row mt-2">
      {ingredients.map((ingredient) => (
        <Recipe key={ingredient.idDrink} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default Recipes;
