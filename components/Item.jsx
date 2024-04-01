import React from "react";
import "./Item.css";

function Item({ itemsObj, onDeleteClick, onCheckClick }) {
  return (
    <div className="item">
      <button onClick={() => onCheckClick(itemsObj.id)}>✅</button>
      <div>
        <span clss={itemsObj.packed ? "done" : ""}>
          {itemsObj.quantity} {itemsObj.itemName}
        </span>
        <button onClick={() => onDeleteClick(itemsObj.id)}>❌</button>
      </div>
    </div>
  );
}

export default Item;
