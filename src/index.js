import React from "react";
import ReactDom from "react-dom";
// import "./index.css";
import ItemList from "./itemlist";
import { useState } from "react";
import Categories from "./categories";

function App() {
  return (
    <div>
      <Categories />
    </div>
  );
}

// export default Categories;

ReactDom.render(<App />, document.getElementById("root"));
