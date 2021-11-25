import React from "react";
import ReactDom from "react-dom";
import "./categories.css";
import ItemList from "./itemlist";
import { useState } from "react";

function Categories() {
  const [category, setCategory] = useState("Produce");

  return (
    <div>
      <div className="jumbotron jumbotron-fluid categoryDiv">
        <button
          className="categoryButton btn btn-primary"
          name="Produce"
          onClick={() => setCategory("Produce")}
        >
          Produce
        </button>
        <button
          className="categoryButton btn btn-primary"
          name="Dairy/Frozen"
          onClick={() => setCategory("Dairy/Frozen")}
        >
          Dariy/Frozen
        </button>
        <button
          className="categoryButton btn btn-primary"
          name="Dry Products"
          onClick={() => setCategory("Dry Products")}
        >
          Dry Products
        </button>
      </div>
      <ItemList category={category}></ItemList>;
    </div>
  );
}

export default Categories;

// ReactDom.render(<Categories />, document.getElementById("root"));
