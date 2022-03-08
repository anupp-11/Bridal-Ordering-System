import {createSlice,current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct: (state, action) => {
            const product = action.payload;
            const currentProd = JSON.parse(JSON.stringify(state.products));
            debugger;
            const productIndex = currentProd.findIndex(p => p.product.id == product.product.id);
            debugger;
            if (productIndex == -1) {
                debugger;
                state.products.push(product);
                state.quantity += 1;
            } else {
                debugger;
                state.products[productIndex].quantity += product.quantity;
            }
            debugger
            state.total += product.product.price * product.quantity;
            debugger;
        }
    }
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;