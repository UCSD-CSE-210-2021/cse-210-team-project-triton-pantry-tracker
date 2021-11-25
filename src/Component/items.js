import react from "react";

function Item({ name, category, quantity, imageurl }) {
  return (
    <div className="item">
      <img className="container" src={imageurl} alt="product.jpg" />
      <br />
      Prodcut Name: {name} <br />
      Quantity: {quantity} <br />
      Category: {category}
    </div>
  );
}

export default Item;
