import { ADD_ORDER_URL } from "../constants/api";
import {getUserInfo} from "./authServices";


export async function getOrder (address,products) {
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
        products: products
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
    // const response = await fetch(ADD_ORDER_URL,
    // {   method: 'POST',
    // headers: new Headers({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${jwtToken}`}),
    //     body: JSON.stringify(requestBody)
    // });
    // debugger;
    // const data = await response.json();
    // debugger;
    // return  data;
}