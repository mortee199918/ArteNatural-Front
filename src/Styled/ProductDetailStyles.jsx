// src/Styled/ProductDetailStyles.js
import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  margin-bottom: 1.5rem;
  padding: 0.4rem 0.8rem;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #5a6268;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 300px;
  flex: 1;
`;

export const ProductInfo = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const Description = styled.p`
  color: #555;
  margin-bottom: 1.5rem;
`;

export const BasePrice = styled.p`
  margin-bottom: 1.5rem;
`;

export const OptionGroup = styled.div`
  margin-top: 1.2rem;
`;

export const OptionLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

export const OptionSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #4c7274;
  }
`;

export const TotalPrice = styled.div`
  margin-top: 1.5rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: #28a745;
`;

export const BuyButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.6rem 1.5rem;
  background-color: #4c7274;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #3e5a5c;
  }
`;