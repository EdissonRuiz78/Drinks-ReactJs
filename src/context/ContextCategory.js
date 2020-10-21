import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//Context
export const ContextCategory = createContext();

//Provider
const ProviderCategory = (props) => {
  const [categorys, updateCategorys] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categorys = await axios.get(url);
      updateCategorys(categorys.data.drinks);
    };
    getCategory();
  }, []);

  return (
    <ContextCategory.Provider
      value={{
        categorys,
      }}
    >
      {props.children}
    </ContextCategory.Provider>
  );
};

export default ProviderCategory;
