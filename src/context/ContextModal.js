import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ContextModal = createContext();

const ProviderModal = (props) => {
  const [idrecipe, updateIdRecipe] = useState("");
  const [recipe, updateRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (idrecipe === "") {
        return;
      }
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
      const response = await axios.get(url);
      updateRecipe(response.data.drinks[0]);
    };
    getRecipe();
  }, [idrecipe]);

  return (
    <ContextModal.Provider
      value={{
        recipe,
        updateRecipe,
        updateIdRecipe,
      }}
    >
      {props.children}
    </ContextModal.Provider>
  );
};

export default ProviderModal;
