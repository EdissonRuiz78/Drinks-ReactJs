import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import ProviderCategory from "./context/ContextCategory";
import ProviderIngredients from "./context/ContextIngredients";
import ProviderModal from "./context/ContextModal";

function App() {
  return (
    <ProviderCategory>
      <ProviderIngredients>
        <ProviderModal>
          <Header />
          <div className="container mt-2">
            <div className="row">
              <Form />
              <Recipes />
            </div>
          </div>
        </ProviderModal>
      </ProviderIngredients>
    </ProviderCategory>
  );
}

export default App;
