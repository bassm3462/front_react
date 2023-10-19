import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialcart = {
  cartItem: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  TotalPrice: 0,
  cartTotalAmount:0,
  cartTotalQuantity:0,
};
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
const OrderState = createSlice({
  name: "OrderS",
  initialState: initialcart,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItem.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingItem >= 0) {
        state.cartItem[existingItem] = {
          ...state.cartItem[existingItem],
          count: state.cartItem[existingItem].count + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempStore = { ...action.payload, count: 1 };
        state.cartItem.push(tempStore);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      saveCartToLocalStorage(state.cartItem);
    },
    decreaseCart: (state, action) => {
      const existingItem = state.cartItem.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cartItem[existingItem].count > 1) {
        state.cartItem[existingItem].count -= 1;
      } else if (state.cartItem[existingItem].count === 1) {
        const nextCartItem = state.cartItem.filter(
          (item) => item._id !== action.payload._id
        );
        console.log(action.payload._id);
        console.log(state.cartItem[existingItem]._id);
        state.cartItem = nextCartItem;
      }
      saveCartToLocalStorage(state.cartItem);
    },
    removeFromCart: (state, action) => {
      state.cartItem.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          const nextCartItem = state.cartItem.filter(
            (item) => item._id !== cartItem._id
          );
          state.cartItem = nextCartItem;
          saveCartToLocalStorage(state.cartItem);
        }
      });
    },
    ClearCard: (state, action) => {
      state.cartItem = []
      saveCartToLocalStorage(state.cartItem);
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, count } = cartItem;
          const itemTotal = price * count;
          cartTotal.total += itemTotal;
          cartTotal.quantity += count;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});
export const { addToCart, decreaseCart, removeFromCart, ClearCard,getTotals } = OrderState.actions;
export default OrderState.reducer;
