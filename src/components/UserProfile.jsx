import styled from "styled-components";
import Box from "@mui/material/Box";
import UserImg from "../assets/user.png";
import { useEffect, useState } from "react";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;
`;

const Image = styled.img`
  height: 60%;
  z-index: 2;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 20px;
`;

const Button = styled.button`
  marginTop:10px;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const UserProfile = ({ item }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchMyAPI() {}

    fetchMyAPI();
  });

  function handleOnClick() {
    
  }


  debugger;
  return (
    <Container>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          border: 1,
          borderColor: "#000",
          m: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={UserImg} />
        <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent:"center",
                marginTop: 20,
                
              }}
            >
        <Title>Anup Poudel</Title>
        <Price>anupleo5@gmail.com</Price>
        </div>
      </Box>

      <Box
        sx={{
          width: "50%",
          height: "100%",
          border: 1,
          borderColor: "#000",
          m: 2,
          p: 2,
        }}
      > 
      <div style={{height:25,width:200, textAlign:'center',backgroundColor:'teal',position:'absolute',right:"4%",top:0,color:'white'}}>
        DEFAULT ADDRESS
      </div>
        {show ? (
          <div>No Shipping Address</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Price>Name</Price>
            <Title>Anup Poudel</Title>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <Price>Address</Price>
              <Title>Street 1, Street 2</Title>
              <Title>City, State, Zip</Title>
              <Title>Country</Title>
            </div>

            <Price>Phone</Price>
            <Title>91823912903</Title>
            <Button onClick={handleOnClick}>EDIT</Button>
          </div>
        )}
      </Box>
    </Container>
  );
};

export default UserProfile;
