import { ADD_ORDER_URL } from "../constants/api";

export async function getOrder (address,products) {
    debugger;
    const loginId = JSON.parse( localStorage.getItem('LoginId') )
    const requestBody = {
        id: loginId,
        address: {
          id: "",
          phone: address.phone,
          street: address.street,
          city: address.city,
          state: address.state,
          country: address.country
        },
        products: []
      }
    const response = await fetch(ADD_ORDER_URL,
    {   method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(requestBody)
    });
    debugger;
    const data = await response.json();
    debugger;
    return  data;
}