const axios = require('axios');



export async function  verifyPayment(payload) {
    let data = {
        "token" : payload.token,
        "amount": payload.amount
    };
    
    let config = {
        headers: {'Authorization': 'Key test_secret_key_5ec0ebb9f15047479ef1bcc502c35bd2'}
    };
    debugger;
    axios.post("https://khalti.com/api/v2/payment/verify/", data, config)
    .then(response => {
        
        console.log(response.data);
        debugger;
        return true;
    })
    .catch(error => {
        
        console.log(error);
        debugger;
        return false;
    });
}

