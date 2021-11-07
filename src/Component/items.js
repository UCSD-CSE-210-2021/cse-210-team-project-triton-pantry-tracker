import react from "react";

function Item({ category }) {
  var src = "lol";
  var itemname = "lol";
  if (category == "Produce") {
    src =
      "https://katieconsiders.com/wp-content/uploads/2019/01/apple-art-print-kids-nursery-modern-minimalist.jpg";
    itemname = "Produce Item";
  }
  if (category == "DairyFrozen") {
    src =
      "https://thumbs.dreamstime.com/z/piece-paper-cheese-large-holes-triangular-maasdam-made-art-craft-real-volumetric-handmade-objects-minimal-artistic-182202946.jpg";
    itemname = "Dairy/Frozen Item";
  }
  if (category == "DryProducts") {
    src =
      "https://www.seekpng.com/png/full/337-3377742_cans-cans-clipart-png.png";
    itemname = "Dry Product";
  }
  return (
    <div className="item">
      <img className="container" src={src} alt="product.jpg" />
      <br />
      This is an {itemname}
    </div>
  );
}

export default Item;
