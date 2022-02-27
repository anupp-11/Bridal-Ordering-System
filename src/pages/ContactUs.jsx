import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { signUpService } from "../services/authServices";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div``;
const Container2 = styled.div`
width: 98.7vw;
height: 100vh;
display: flex;
align-items: center;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 0, 0, 0.5)
    ),
    url("https://media.istockphoto.com/photos/hindu-wedding-ritual-wherein-bride-and-groom-hand-picture-id1186214696?k=20&m=1186214696&s=170667a&w=0&h=CxxDA51EcUq4OLVHoVoWVmemVFTTwk6OnZH7oKrR-Gg=")
      center;
  background-size: cover;
  justify-content: center;
`;

const ImgContainer = styled.div`
  width: 100%;
 
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

const Input1 = styled.input`
width: 100%;
max-width: 100%;
height: 120px;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`;


const Button = styled.button`
  border: none;
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

const Contactus = () => {
    const [inputValues, setInputValue] = useState({
        name: "",
        email: "",
        message: "",
      });

      function handleChange(event) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
      }

    return (
        <Container>
            <Navbar />
            <ImgContainer>
            <Container2>
            <Wrapper>
                <Title>CONTACT US</Title>
                <Form>
          <div>
            <Input
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Name"
              type="text"
              value={inputValues.name} />
          </div>
          <div>
            <Input
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="email"
              type="email"
              value={inputValues.email} />
          </div>
          {/* </InputStyle> */}
          <div>
          <Input1  
            name="message" 
            onChange={(e) => handleChange(e)}
            placeholder="Write something.." 
            type="text"
            value={inputValues.message}/>
          </div>
          <Mystyle>
            <Button
              type="submit"
            //   onClick={registerService}
              >SEND</Button>
          </Mystyle>
        </Form>
            </Wrapper>
            </Container2>
            </ImgContainer>
            <Footer />
        </Container>
    );
};

export default Contactus;
