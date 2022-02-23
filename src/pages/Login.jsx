import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
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

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link1>DO NOT YOU REMEMBER THE PASSWORD?</Link1>
          <Link to={'/register'}>
          <Link1>CREATE A NEW ACCOUNT</Link1>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
