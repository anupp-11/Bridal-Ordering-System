import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
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
  margin-left: 125px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const validator = new SimpleReactValidator();

    const registerService = async () => {
      debugger;
        const registerInfo = {
          name : name,
          email : email,
          password: password,
        }
        debugger;
        try{
          if(validator.allValid()){
            const response = await signUpService(registerInfo);
        }else{
          debugger;
          validator.showMessages();
        }
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
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            value={name}/>
            {validator.message('name', name, 'required|min:3',{className: 'text-danger' })}
          <Input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
            value={email} />
          <Input
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            value={password} />
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
