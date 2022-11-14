import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Listing from "./components/Listing";
import Menu from "./components/Menu";
import ComplexList from "./components/ComplexList";
import FoodPriceIngredients from "./components/FoodPriceIngredients"
import ClientSideSearch from "./components/ClientSideSearch"

function App() {
  return (
    <React.Fragment>
      <p>----------Simple List----------</p>
      <Listing/>
      <Menu/>
      <p>----------Complex List----------</p>
      <ComplexList/>
      <FoodPriceIngredients/>
      <p>----------Complex List Client Side Search----------</p>
      <ClientSideSearch/>
    </React.Fragment>
  );
}

export default App;
