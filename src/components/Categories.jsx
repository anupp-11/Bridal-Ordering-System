import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { useState } from "react";
import { useEffect } from "react";
import { getPackages } from "../services/package.service";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Categories = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [isProcessing, setIsProcessing] = useState(true);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getPackages();
      setCategoriesList(response.result);
      debugger;
      setIsProcessing(false);
    }

    fetchMyAPI()
  }, [])
  if (isProcessing) {
    return <div>Loading...</div>
  }
  else {

  
  return (
    <Container>
      {categoriesList.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );}
};

export default Categories;
