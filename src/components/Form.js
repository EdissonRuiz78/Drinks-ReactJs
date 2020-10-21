import React, { useContext, useState } from "react";
import { ContextCategory } from "../context/ContextCategory";
import { ContextIngredients } from "../context/ContextIngredients";
import Error from "./Error";

const Form = () => {
  const { categorys } = useContext(ContextCategory);
  const { updateRecipe, updateData } = useContext(ContextIngredients);
  const [error, updateError] = useState(false);
  const [search, updateSearch] = useState({
    name: "",
    category: "",
  });

  const handleOnChange = (e) => {
    updateSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { name, category } = search;
    if (name === "" || category === "") {
      updateError(true);
      return;
    }
    updateError(false);
    updateData(true);
    updateRecipe(search);
  };

  return (
    <form className="col-12" onSubmit={handleOnSubmit}>
      <div className="row mt-2">
        <div className="col-md-4 mt-2">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Type an Ingredient"
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-4 mt-2">
          <select
            className="form-control"
            name="category"
            onChange={handleOnChange}
          >
            <option value="">-- Category --</option>
            {categorys.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <button className="btn btn-block btn-danger mt-2" type="submit">
            Search Drink
          </button>
        </div>
      </div>
      {error ? <Error message="All fields are required" /> : null}
    </form>
  );
};

export default Form;
