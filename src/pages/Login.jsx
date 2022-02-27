import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginService } from "../services/authServices";
import { useHistory } from "react-router-dom";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 0, 0, 0.5)
    ),
    url("https://media.istockphoto.com/photos/engagement-ring-ceremony-indian-hindu-male-putting-ring-on-brides-picture-id1141906797?b=1&k=20&m=1141906797&s=170667a&w=0&h=nvMQMw5x5RYhp94jII9yklkImDpTCUKG8zkcm1cDFro=")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.div`
  display: flex;
  border-radius: 5px;
background-color: #f2f2f2;
padding: 20px;
  flex-direction: column;
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

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link1 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Danger = styled.div`
  color: red;
`

const Login = () => {
  let history = useHistory();
  const [inputValues, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const userlogin = async () => {
    debugger;
    try {
      const response = await loginService(inputValues);
      const responseData = await response.json();
      if(response.ok){
        if(responseData.isError === false){
          debugger;
          alert('Login Successful')
          history.push("/")
        }else{
          setValidation(responseData.message)
        }
      }

      debugger;
    } catch {

    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="Email"
            type="email"
            value={inputValues.email} />
          <Input
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="Password"
            type="password"
            value={inputValues.password} />
            <Danger>
              {validation && <p>{validation}</p>}
            </Danger>
          <Button
            type="submit"
            onClick={userlogin}>LOGIN</Button>
          {/* <Link1>DO NOT YOU REMEMBER THE PASSWORD?</Link1> */}
          <Link to={'/register'}>
            <Link1>CREATE A NEW ACCOUNT</Link1>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
