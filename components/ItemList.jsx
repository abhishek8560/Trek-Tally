import React from "react";
import "./ItemList.css";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { itemSliceActions } from "../store/ItemSlice";

function ItemList() {
  let { itemsArray } = useSelector((store) => store.ITEM_SLICE);
  let dispatch = useDispatch();

  function onDeleteClick(itemID) {
    dispatch(itemSliceActions.deleteItem({ itemID: itemID }));
  }

  function onCheckClick(itemID) {
    console.log("check clicked");
    dispatch(itemSliceActions.checkItem({ itemId: itemID }));
  }

  function onClearList() {
    dispatch(itemSliceActions.clearList());
  }

  return (
    <div className="listItemContainer">
      <div className="listContainer">
        {itemsArray.map((itemsObj) => (
          <Item
            onDeleteClick={onDeleteClick}
            onCheckClick={onCheckClick}
            key={itemsObj.id}
            itemsObj={itemsObj}
          />
        ))}
      </div>

      <div className="sortContainer">
        <button onClick={onClearList}>CLEAR LIST</button>
      </div>
    </div>
  );
}

export default ItemList;
