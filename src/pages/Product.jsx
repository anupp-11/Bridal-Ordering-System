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
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isProcessing: true,
      product: '',
      index: 0,
      count: 0,
    };
    this.setIndex = this.setIndex.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);

  }


  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const product = await getProductById(id);
    this.setState({ product: product });
    this.setState({ isProcessing: false });

  };
  setIndex(e) {
    e.stopPropagation();
    this.setState({ index: parseInt(e.target.id) });
  }
  handleIncrement(e) {
    e.stopPropagation();
    var c = this.state.count + 1;
    this.setState({ count: c })
  };

  handleDecrement(e){
    debugger;
    e.stopPropagation();
    if(this.state.count>0){
      var c = this.state.count - 1;
      this.setState({ count: c })
    }
    
  };


  render() {
    if (this.state.isProcessing) {
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

              <Image src={this.state.product.images[this.state.index].img} />
              {this.state.product.images.map((item, index) => <ThumbnailImage id={index} src={item.img} onClick={this.setIndex} />)}
            </ImgContainer>
            <InfoContainer>
              <Title>{this.state.product.name}</Title>
              <Desc>
                {this.state.product.description}
              </Desc>
              <Price>{this.state.product.price}</Price>
              {/* <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color="black" />
                  <FilterColor color="darkblue" />
                  <FilterColor color="gray" />
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                </Filter>
              </FilterContainer> */}
              <AddContainer>
                <AmountContainer>
                  <Remove onClick={this.handleDecrement}/>
                  <Amount>{this.state.count}</Amount>
                  <Add onClick={this.handleIncrement}/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
              </AddContainer>
            </InfoContainer>
          </Wrapper>
          <Footer />
        </Container>
      );
    }

  }
};
export default withRouter(Product);