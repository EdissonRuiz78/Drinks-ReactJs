import React, { useContext, useState } from "react";
import { ContextModal } from "../context/ContextModal";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({ ingredient }) => {
  const { recipe, updateRecipe, updateIdRecipe } = useContext(ContextModal);
  const { strDrink, strDrinkThumb, idDrink } = ingredient;
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showIngredients = (recipe) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

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
              handleOpen();
            }}
          >
            See more
          </button>
          <Modal
            open={open}
            onClose={() => {
              handleClose();
              updateIdRecipe("");
              updateRecipe({});
            }}
          >
            <div className={classes.paper} style={modalStyle}>
              <h4>{recipe.strDrink}</h4>
              <h5>Instructions</h5>
              <p>{recipe.strInstructions}</p>
              <img className="img-fluid" src={strDrinkThumb} alt={strDrink} />
              <h5>Ingredients</h5>
              <ul>{showIngredients(recipe)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
