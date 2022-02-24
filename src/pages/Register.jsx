import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {signUpService} from "../services/authServices";
import SimpleReactValidator from "simple-react-validator";

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

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Button1 = styled.button`
  width: 80%;
  border: none;
  margin: 0px 0px 0px 80px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [inputValues, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }
  const checkValidation = () => {
    let errors = validation;

    if (!inputValues.name.trim()) {
      errors.name = "First name is required";
    } else {
      errors.name = "";
    } 

    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be longer than 6 characters";
    } else{
      errors.password = "";
    }

    setValidation(errors);
  }

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

    const registerService = async () => {
        debugger;
        try{
            const response = await signUpService(inputValues);
            debugger;
        }catch{

        }
    }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            name="name"
            onChange={(e) => handleChange(e)}
            placeholder="Name"
            type="text"
            value={inputValues.name}/>
            {/* {validation.name && <p>{validation.name}</p>} */}
          <Input
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="email"
            type="email"
            value={inputValues.email} />
            {/* {validation.email && <p>{validation.email}</p>} */}
          <Input
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="password"
            type="password"
            value={inputValues.password} />
            {/* {validation.password && <p>{validation.password}</p>} */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button 
            type="submit" 
            onClick={registerService}>CREATE</Button>
          <Link to={'/login'}>
            <Button1>ALREADY HAVE AN ACCOUNT</Button1>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
