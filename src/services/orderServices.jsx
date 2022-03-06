import { ADD_ORDER_URL } from "../constants/api";

export async function getOrder (address,products) {
    debugger;
    const loginId = JSON.parse( localStorage.getItem('LoginId'));
    const jwtToken = loginId.token;
    const requestBody = {
        userId: loginId.id,
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
    const response = await fetch(ADD_ORDER_URL,
    {   method: 'POST',
        headers:{
          'Authorization': `Bearer'${jwtToken}`, 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(requestBody)
    });
    debugger;
    const data = await response.json();
    debugger;
    return  data;
}