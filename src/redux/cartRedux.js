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
            // debugger;
            // const productIndex = state.products.findIndex(p => p.id == product.id);
            // debugger;
            // if (productIndex == -1) {
            //     state.products.push(product);
            //     state.quantity += 1;
            // } else {
            //     state.products[productIndex].quantity += product.quantity;
            // }
            
            // state.total += product.product.price * product.quantity;


        
            // const c = state;
            // const currentProd = JSON.parse(JSON.stringify(state.products));
            debugger;
            if(state.products.find(product => product.id == action.payload.product.id)){
                debugger;
                state.products.find(product => product.id == action.payload.product.id).quantity += action.payload.product.quantity;
            }else{
                debugger;
                state.quantity += 1;
                state.products.push(action.payload);
            }
            debugger;
            state.total += product.product.price * product.quantity;

        }
    }
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;