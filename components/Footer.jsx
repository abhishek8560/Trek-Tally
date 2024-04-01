import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";

function Footer() {
  let { itemsArray } = useSelector((store) => store.ITEM_SLICE);
  return (
    <>
      <p className="footer">
        👜 You have {itemsArray.length} items on your list.
      </p>
    </>
  );
}

export default Footer;
