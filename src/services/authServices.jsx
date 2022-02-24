export async function loginService(item) {

    // debugger;
    // const url = (login);

    const requestOptions = {
        method: 'post',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(item)
    }
    const response = "Login Successfull"
    // await fetch(url, requestOptions);
    return response;
}

export async function signUpService(item) {

    debugger;

    const response = "SignUp Successful"
    // await fetch(register,
        // {
        //     method: 'post',
        //     headers: new Headers({ 'content-type': 'application/json' }),
        //     body: JSON.stringify(item)

        // });
    return response;
}