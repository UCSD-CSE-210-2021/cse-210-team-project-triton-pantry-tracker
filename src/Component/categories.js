import React from "react";
// import ReactDom from "react-dom";
import "./categories.css";
import ItemList from "./itemlist";
import { useState, useEffect } from "react";
import sheetdb from "sheetdb-node";
import Item from "./items";
import auth from "./auth";

function Categories() {
  const [cat, setCat] = useState("Init");
  const [listItemsState, setListItemsState] = useState(window.$produceItems);
  
  var pantrylocation = window.location.pathname
  if (pantrylocation.indexOf("gradhousing") > -1 ) {
    pantrylocation = "Graduate Housing";
  } else {
    pantrylocation = "Student Center A";
  };

  useEffect (() => {
    if (window.location.href != document.referrer) {
      window.location.reload();
      setCat("Init");
      setListItemsState(window.$produceItems);
      window.$listItems = [];
    }
  });


  var config = {
    address: auth.AUTH_API_ID,
  };
  window.$listItems = [];
  var client = sheetdb(config);
  client.read({ search: { category: "Produce", location: pantrylocation } }).then(
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
  client.read({ search: { category: "Dairy/Frozen", location: pantrylocation } }).then(
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
  client.read({ search: { category: "Dry Products", location: pantrylocation } }).then(
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
  client.read({ search: { category: "Produce", location: pantrylocation } }).then(
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
      <div className="jumbotron jumbotron-fluid categoryDiv restrict">
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
          Dairy/Frozen
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
