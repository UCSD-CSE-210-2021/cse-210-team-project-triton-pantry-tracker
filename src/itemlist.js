import react from "react";
import Item from "./items";

function ItemList({ category }) {
  return (
    <div className="itemlist">
      {/* {category} */}
      <Item category={category} />
      <Item category={category} />
      <Item category={category} />
      <Item category={category} />
      <Item category={category} />
    </div>
  );
}

export default ItemList;
