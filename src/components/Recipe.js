import React, { useContext } from "react";
import { ContextModal } from "../context/ContextModal";

const Recipe = ({ ingredient }) => {
  const { updateIdRecipe } = useContext(ContextModal);
  const { strDrink, strDrinkThumb, idDrink } = ingredient;

  return (
    <div className="col-md-3 mt-4">
      <div className="card">
        <h4 className="card-header">{strDrink}</h4>
        <img className="card-img-top" src={strDrinkThumb} alt={strDrink} />
        <div className="card-body">
          <button
            className="btn btn-danger btn-block"
            type="button"
            onClick={() => {
              updateIdRecipe(idDrink);
            }}
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
