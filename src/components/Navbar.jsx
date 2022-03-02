import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png';
import {connect} from 'react-redux';
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

// const Logo = styled.h1`
//   font-weight: bold;
//   ${mobile({ fontSize: "24px" })}
// `;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const MenuItems = styled.div`
  font-size: 16px;
  font-weight:bold;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = (props) => {
  debugger;
  return (
    <Container>
      <Wrapper>
        <Left>
          <div>
            <Link to={"/"}>
              <img height="40px" src={Logo} />
            </Link>
          </div>

        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <MenuItems>HOME</MenuItems>
          </Link>

          <Link to="/products" style={{ textDecoration: 'none' }}>
            <MenuItems>PRODUCT & PACKAGES</MenuItems>
          </Link>

          <Link to="" style={{ textDecoration: 'none' }}>
            <MenuItems>ABOUT US</MenuItems>
          </Link>

          <Link to="" style={{ textDecoration: 'none' }}>
            <MenuItems>CONTACT US</MenuItems>
          </Link>

          
        </Center>
        <Right>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>

          <Link to="/login" style={{ textDecoration: 'none' }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={props.cartItems.length} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return{
    cartItems: state
  }
};

export default connect(mapStateToProps)(Navbar);
