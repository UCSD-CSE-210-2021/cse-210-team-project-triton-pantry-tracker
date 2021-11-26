import react from "react";
import Item from "./items";
// import sheetdb from "sheetdb-node";
import { Link } from "react-router-dom";
import { parseDate } from "devextreme/localization";

function ItemList({ listItems }) {
  console.log(listItems);
  // var config = {
  //   address: "trzlwm6ups5th",
  //   auth_login: "1jj470ii",
  //   auth_password: "bxgiau56agkk54tayopt",
  // };
  // // window.$listItems = [];
  // var client = sheetdb(config);
  // client.read({ search: { category: category } }).then(
  //   function (data) {
  //     var parsedData = JSON.parse(data);
  //     // console.log(parsedData);
  //     // console.log(typeof data);
  //     window.$listItems = parsedData.map((pd) => (
  //       <Item
  //         name={pd.name}
  //         category={pd.category}
  //         quantity={pd.quantity}
  //         imageurl={pd.imageURL}
  //       ></Item>
  //     ));
  //   },
  //   function (err) {
  //     console.log(err);
  //   }
  // );
  // console.log("LIST ITEMS");
  // console.log(listItems);
  return <div className="itemlist">{listItems}</div>;
}

export default ItemList;
