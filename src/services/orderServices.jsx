import { ADD_ORDER_URL,GET_ORDER_URL } from "../constants/api";
import {getUserInfo} from "./authServices";


export async function placeOrder (address,products) {
    debugger;
    const user = await getUserInfo();
    const jwtToken = user.jwtToken;
    const requestBody = {
        userId: user.id,
        address: {
          phone: address.phone,
          street: address.street,
          city: address.city,
          state: address.state,
          country: address.country
        },
        orderedProducts: products
      }
      debugger;
    try {
        const response = await fetch(ADD_ORDER_URL, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`}),
            body: JSON.stringify(requestBody)
            });
            const data = await response.json();
            return  data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function getOrders () {
    
    const user = await getUserInfo();
    const jwtToken = user.jwtToken;
    debugger;
    try {
        const response = await fetch(GET_ORDER_URL, {
            method: 'get',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`}),
            });
            const data = await response.json();
            return  data;
            debugger;
    } catch (error) {
        console.log(error.message);
    }
}