import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slice";
import quantityReducer from "./slices/quantity-slice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    quantity : quantityReducer,
  },
});

export default store;
