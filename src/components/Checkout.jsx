import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { signUpService } from "../services/authServices";
import {getOrder} from "../services/orderServices"
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 0, 0, 0.5)
    ),
    url("https://c4.wallpaperflare.com/wallpaper/189/32/933/gorgeous-bride-in-a-beautiful-dress-evening-wallpaper-preview.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.div`
border-radius: 5px;
background-color: #f2f2f2;
padding: 20px;
`;

const Input = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Button1 = styled.button`
  border: none;
  margin: 0px 0px 0px 0px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Mystyle = styled.div`
  width: 100%;
  display:flex; 
  margin: 10px 20px 0px 0px;
  flex-direction: row; 
  align-items: center; 
  justify-content: space-between;
`

const Danger = styled.div`
  color: red;
`

const Checkout = () => {
  let history = useHistory();
  const [inputValues, setInputValue] = useState({
        id: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        country: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }
  
  const checkoutService = async () => {
    debugger;
    try {
      // if(validation.name && validation.email && validation.password === ""){
      const response = await getOrder(inputValues);
      debugger;
      const responseData = await response.json();
      if(response.ok){
        if(responseData.isError === false){
          debugger;
          alert('Order has been placed Successfully')
            setInputValue({
                id: "",
                phone: "",
                street: "",
                city: "",
                state: "",
                country: ""
            })
          history.push("/")

        }else{
          // alert(responseData.message)
        }
      }
      // } else {
      // }
      debugger;
    } catch {

    }
  }
  return (
    <Container>
      <Wrapper>
        <Title>PLACE ORDER</Title>
        <Form>
          <div>
            <Input
              name="phone"
              onChange={(e) => handleChange(e)}
              placeholder="Phone Number"
              type="number"
              value={inputValues.phone} />
          </div>
          <div>
            <Input
              name="street"
              onChange={(e) => handleChange(e)}
              placeholder="Street"
              type="text"
              value={inputValues.street} />
          </div>
          <div>
            <Input
              name="city"
              onChange={(e) => handleChange(e)}
              placeholder="City"
              type="text"
              value={inputValues.city} />
          </div>
          <div>
            <Input
              name="state"
              onChange={(e) => handleChange(e)}
              placeholder="State"
              type="text"
              value={inputValues.state} />
          </div>
          <div>
            <Input
              name="country"
              onChange={(e) => handleChange(e)}
              placeholder="Country"
              type="text"
              value={inputValues.country} />
          </div>
          <Mystyle>
            <Button
              type="submit"
              onClick={checkoutService}>CHECKOUT</Button>
          </Mystyle>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Checkout;

