import styled from "styled-components";

import { useEffect, useState } from "react";
import { getOrders } from "../services/orderServices"

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-direction: row;
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

const Order = ({ item }) => {

  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await getOrders();
      if(response){
        setOrders(response);
      }
      debugger;
    }

    fetchMyAPI();
  },[]);



  debugger;
  return (
    <Container>
      {orders.map((item)=> 
       (
          <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{marginRight:20}}>{item.id}</div>
          {/* <div style={{marginRight:20}}>Product 1, Product 2</div>
          <div style={{marginRight:20}}>2021/12/21</div> */}
      </div>
        
      ))}
    </Container>
  );
};

export default Order;
