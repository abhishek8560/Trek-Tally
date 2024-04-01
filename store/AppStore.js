import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";

let appStore = configureStore({
  reducer: {
    ITEM_SLICE: ItemSlice.reducer,
  },
});

export default appStore;
