import styled from "styled-components";
import Box from "@mui/material/Box";
import UserImg from "../assets/user.png";
import { useEffect, useState } from "react";
import { getUserInfo } from "../services/authServices.jsx";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
const MenuItem = styled.div`
  margintop: 10px;
  border: 2px solid teal;
  background-color: teal;
  color: white;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
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
  margintop: 10px;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserProfile = ({ item }) => {
  const [show, setShow] = useState(true);
  const [data, setData] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await getUserInfo();
      if (response) {
        setData(response);
      }
    }

    fetchMyAPI();
  }, []);
  function handleOnClick() {}

  debugger;
  if (data) {
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
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Title>{data.name}</Title>
            <Price>{data.email}</Price>
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
          {show ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                aliginItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Button onClick={handleOpen}>ADD SHIPPING ADDRESS</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  height: 25,
                  width: 200,
                  textAlign: "center",
                  backgroundColor: "teal",
                  position: "absolute",
                  right: "4%",
                  top: 0,
                  color: "white",
                }}
              >
                DEFAULT ADDRESS
              </div>
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
  } else {
    return (
      <Container>
        <div>
          <Title>PLEASE LOGIN TO CONTINUE</Title>
          <div
            style={{
              display: "flex",
              aliginItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/register" style={{ textDecoration: "none" }}>
              <MenuItem>REGISTER</MenuItem>
            </Link>

            <Link to="/login" style={{ textDecoration: "none" }}>
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          </div>
        </div>
      </Container>
    );
  }
};

export default UserProfile;
