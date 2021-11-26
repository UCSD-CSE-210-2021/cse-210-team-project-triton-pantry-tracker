import React from "react";
import ReactDom from "react-dom";
import "./categories.css";
import ItemList from "./itemlist";
import { useState, useEffect } from "react";
import sheetdb from "sheetdb-node";
import Item from "./items";

function Categories() {
  const [cat, setCat] = useState("Init");
  const [listItemsState, setListItemsState] = useState(window.$produceItems);

  var config = {
    address: "zryjil69mi7hs",
  };
  window.$listItems = [];
  var client = sheetdb(config);
  client.read({ search: { category: "Produce" } }).then(
    function (data) {
      var parsedData = JSON.parse(data);
      console.log(parsedData);
      // console.log(typeof data);
      window.$produceItems = parsedData.map((pd) => (
        <Item
          name={pd.name}
          category={pd.category}
          quantity={pd.quantity}
          imageurl={pd.imageURL}
        ></Item>
      ));
    },
    function (err) {
      console.log(err);
    }
  );
  client.read({ search: { category: "Dairy/Frozen" } }).then(
    function (data) {
      var parsedData = JSON.parse(data);
      console.log(parsedData);
      // console.log(typeof data);
      window.$dairyItems = parsedData.map((pd) => (
        <Item
          name={pd.name}
          category={pd.category}
          quantity={pd.quantity}
          imageurl={pd.imageURL}
        ></Item>
      ));
    },
    function (err) {
      console.log(err);
    }
  );
  client.read({ search: { category: "Dry Products" } }).then(
    function (data) {
      var parsedData = JSON.parse(data);
      console.log(parsedData);
      // console.log(typeof data);
      window.$dryItems = parsedData.map((pd) => (
        <Item
          name={pd.name}
          category={pd.category}
          quantity={pd.quantity}
          imageurl={pd.imageURL}
        ></Item>
      ));
    },
    function (err) {
      console.log(err);
    }
  );
  client.read({ search: { category: "Produce" } }).then(
    function (data) {
      var parsedData = JSON.parse(data);
      // console.log(parsedData);
      // console.log(typeof data);
      window.$listItems = parsedData.map((pd) => (
        <Item
          name={pd.name}
          category={pd.category}
          quantity={pd.quantity}
          imageurl={pd.imageURL}
        ></Item>
      ));
    },
    function (err) {
      console.log(err);
    }
  );

  return (
    <div>
      <div className="jumbotron jumbotron-fluid categoryDiv">
        <button
          className="categoryButton btn btn-primary"
          name="Produce"
          onClick={() => {
            setCat("Produce");
            setListItemsState(window.$produceItems);
          }}
        >
          Produce
        </button>
        <button
          className="categoryButton btn btn-primary"
          name="Dairy/Frozen"
          onClick={() => {
            setCat("Dairy/Frozen");
            setListItemsState(window.$dairyItems);
          }}
        >
          Dariy/Frozen
        </button>
        <button
          className="categoryButton btn btn-primary"
          name="Dry Products"
          onClick={() => {
            setCat("Dry Products");
            setListItemsState(window.$dryItems);
          }}
        >
          Dry Products
        </button>
      </div>
      <ItemList listItems={listItemsState}></ItemList>;
    </div>
  );
}

export default Categories;

// ReactDom.render(<Categories />, document.getElementById("root"));
