import { createSlice } from "@reduxjs/toolkit";

let INITIAL_STATE = [];

let id = 0;

let ItemSlice = createSlice({
  name: "ITEM_SLICE",
  initialState: { itemsArray: INITIAL_STATE },
  reducers: {
    addItem: (state, action) => {
      id = id + 1;
      let quantity = action.payload.quantity;
      let item = action.payload.item;
      let updatedItemsArray = [
        ...state.itemsArray,
        { id: id, itemName: item, quantity: quantity, packed: false },
      ];
      state.itemsArray = [...updatedItemsArray];
    },
    deleteItem: (state, action) => {
      let updatedItemArray = [...state.itemsArray];
      updatedItemArray = updatedItemArray.filter(
        (itemsObj) => itemsObj.id !== action.payload.itemID
      );
      state.itemsArray = [...updatedItemArray];
    },
    checkItem: (state, action) => {
      console.log("Item ID: ", action.payload.itemID);

      let updatedItemArray = [...state.itemsArray];
      updatedItemArray = updatedItemArray.map((itemObj) =>
        itemObj.id === action.payload.itemID
          ? {
              id: itemObj.id,
              itemName: itemObj.itemName,
              quantity: itemObj.quantity,
              packed: true,
            }
          : itemObj
      );
      state.itemsArray = [...updatedItemArray];
    },
    clearList: (state) => {
      state.itemsArray = [];
    },
  },
});

export const itemSliceActions = ItemSlice.actions;

export default ItemSlice;
