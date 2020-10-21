import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ContextIngredients = createContext();

const ProviderIngredients = (props) => {
  const [ingredients, updateIngredients] = useState([]);
  const [data, updateData] = useState(false);
  const [recipe, updateRecipe] = useState({
    name: "",
    category: "",
  });

  useEffect(() => {
    if (data) {
      const getIngredients = async () => {
        const { name, category } = recipe;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
        const response = await axios.get(url);
        updateIngredients(response.data.drinks);
      };
      getIngredients();
    }
  }, [recipe]);

  return (
    <ContextIngredients.Provider
      value={{
        ingredients,
        updateRecipe,
        updateData,
      }}
    >
      {props.children}
    </ContextIngredients.Provider>
  );
};

export default ProviderIngredients;
