import React from "react";
import styled from "styled-components";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import RatingComponent from "../components/RatingComponent";
import Button from "@mui/material/Button";

const Container = styled.div``;

const LeftContainer = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
  color: black;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  align-items: center;
  font-weight: 700;
`;

const ProductScreen = () => {
  return (
    <Container className="bg-light">
      <Wrapper>
        <LeftContainer>
          <ImgContainer>
            <Image src="http://res.cloudinary.com/dm4murokj/image/upload/v1671653673/qk0omdhrrkpe0qpefman.webp" />
          </ImgContainer>
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className=" bg-light mt-5 mb-3 justify"
            fill
          >
            <Tab eventKey="reviewitem" title="Review for this item">
              {/* <Sonnet /> */}
              <h1>Review</h1>
              <p>
                Lorem ipsum askjvfbiwvbjk cb wdvckjkhdvchjwbd ,m vkjbiuwefbuw
                wekjfcbwe vewh vjhwevcn wevc jkewbvjicweb ikjkj kjb jubuibkj bhj
                gfvyu k ckjut yuvyx syjhvc jhdxyt chjcuyjdstycvkjdx
                utcjkcxhgdyuhjvkj hdxsytjkdxjyduyhjvjk duyfkjchjv
              </p>
            </Tab>
            <Tab eventKey="suggestions" title="Suggestions">
              {/* <Sonnet /> */}
              <h1>Suggestions</h1>
              <p>
                Lorem ipsum askjvfbiwvbjk cb wdvckjkhdvchjwbd ,m vkjbiuwefbuw
                wekjfcbwe vewh vjhwevcn wevc jkewbvjicweb ikjkj kjb jubuibkj bhj
                gfvyu k ckjut yuvyx syjhvc jhdxyt chjcuyjdstycvkjdx
                utcjkcxhgdyuhjvkj hdxsytjkdxjyduyhjvjk duyfkjchjv
              </p>
            </Tab>
          </Tabs>
        </LeftContainer>
        <InfoContainer>
          <Title>Minimal Concrete Bud Vases</Title>
          <Price> $ 22.92</Price>
          <RatingComponent />
          <FilterContainer>
            <Filter className="me-4">
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="pink" />
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
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <div className="def-number-input number-input">
                <input
                  className="quantity fw-bold"
                  min={1}
                  max={1000}
                  defaultValue={1}
                  type="number"
                  name="number"
                />
              </div>
            </AmountContainer>
            <Button
              sx={{
                background: "#0d6efd",
              }}
              variant="contained"
              href="/cart"
              className="text-white"
              size="large"
            >
              Add to cart
            </Button>
          </AddContainer>
          <h6 className="mt-5">Highlights</h6>
          <p>Handmade</p>
          <p>Materials: Ceramic</p>
          <h6>Description</h6>
          <Desc>
            A nice vase with flowers can brighten up just about any day. This
            vase makes it easy to decorate with natural beauty in your home and
            is perfect for bouquets.
          </Desc>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductScreen;
