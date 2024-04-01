import React, { useRef, useState } from "react";
import "./InputContainer.css";
import { useDispatch } from "react-redux";
import { itemSliceActions } from "../store/ItemSlice";

function InputContainer() {
  let [quantity, setQuantity] = useState("1");
  let inputItem = useRef();
  let dispatch = useDispatch();

  function onQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function onAddClick() {
    if (inputItem.current.value !== "") {
      dispatch(
        itemSliceActions.addItem({
          item: inputItem.current.value,
          quantity: quantity,
        })
      );
    }
    setQuantity("1");
    inputItem.current.value = "";
  }
  return (
    <div className="inputContainer">
      <span>What do you need for your trip?</span>

      <input ref={inputItem} type="text" placeholder="Item..." />

      <select value={quantity} onChange={onQuantityChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((numb) => (
          <option value={numb} key={numb}>
            {numb}
          </option>
        ))}
      </select>

      <button onClick={onAddClick}>ADD</button>
    </div>
  );
}

export default InputContainer;
