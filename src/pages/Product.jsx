import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import React from 'react';
import { withRouter } from "react-router";
import { getProductById } from '../services/products.service';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const ThumbnailImage = styled.img`
  
  height: 15vh;
  object-fit: cover;
  padding:10px;
  ${mobile({ height: "3vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;
const Product =(props)=> {


  const [data, setData] = React.useState([]);
  const [isProcessing, setIsProcessing] = React.useState(true);
  const [product, setProduct] = React.useState({});
  const [index, setIndex] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMyAPI() {
      const id = props.match.params.id;
      const product = await getProductById(id);
      setProduct(product);
      setIsProcessing(false);
    }

    fetchMyAPI()
  }, []);


function setIndexx(e) {
  e.stopPropagation();
  setIndex(e.target.id);
}
function handleIncrement(e) {
  e.stopPropagation();
  var c = quantity + 1;
  setQuantity(c);
};

function handleDecrement(e){
  debugger;
  e.stopPropagation();
  if (quantity > 0) {
    var c = quantity - 1;
    setQuantity(c);
  }

};

function handleOnClick(){
  dispatch(addProduct({product,quantity }));
}



  if (isProcessing) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40vh' }}>
        <CircularProgress />
      </Box>
    )
  } else {
    return (
      <Container>
        <Navbar />
        <Wrapper>
          <ImgContainer>

            <Image src={product.images[index].img} />
            {product.images.map((item, index) => <ThumbnailImage id={index} src={item.img} onClick={setIndexx} />)}
          </ImgContainer>
          <InfoContainer>
            <Title>{product.name}</Title>
            <Desc>
              {product.description}
            </Desc>
            <Price>{product.price}</Price>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={handleDecrement} />
                <Amount>{quantity}</Amount>
                <Add onClick={handleIncrement} />
              </AmountContainer>
              <Button onClick={handleOnClick}>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Footer />
      </Container>
    );
  }


};
export default withRouter(Product);