import { createSlice } from '@reduxjs/toolkit';

const items =
  localStorage.getItem('cartList') !== null
    ? JSON.parse(localStorage.getItem('cartList'))
    : [];

const totalAmount =
  localStorage.getItem('cartTotal') !== null
    ? JSON.parse(localStorage.getItem('cartTotal'))
    : 0;

const totalQuantity =
  localStorage.getItem('cartQuantity') !== null
    ? JSON.parse(localStorage.getItem('cartQuantity'))
    : 0;

const setCartListFunc = (items, totalAmount, totalQuantity) => {
  localStorage.setItem('cartList', JSON.stringify(items));
  localStorage.setItem('cartTotal', JSON.stringify(totalAmount));
  localStorage.setItem('cartQuantity', JSON.stringify(totalQuantity));
};

const initialState = {
  cartItems: items,
  totalAmount: totalAmount,
  totalQuantity: totalQuantity,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      setCartListFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );

      console.log(totalQuantity)
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      setCartListFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
