import react from "react";

function Item({ name, category, quantity, imageurl }) {
  return (
    <div className="item text-center justify">
      <img className="container" src={imageurl} alt="product.jpg" />
      <br />
      <b style={{ fontFamily: "Book Antiqua", fontSize: "1.4rem" }}>
        Product Name: {name}
        <br />
        Quantity: {quantity}
        <br />
        Category: {category}
      </b>
    </div>
  );
}

export default Item;
