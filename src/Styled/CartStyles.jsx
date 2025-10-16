// src/Styled/CartStyles.js
import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 1rem;
  background: #fafafa;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
`;

export const ItemInfo = styled.div`
  flex: 1;
  h3 {
    margin: 0 0 0.5rem 0;
    color: #333;
  }
  p {
    margin: 0.2rem 0;
    color: #555;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #dc3545;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  &:hover {
    background: #ffecec;
  }
`;

export const Total = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: right;
  margin: 1.5rem 0;
  color: #28a745;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #4c7274;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    background-color: #3e5a5c;
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  h2 {
    margin-bottom: 1.5rem;
    color: #555;
  }
  button {
    padding: 0.5rem 1.5rem;
    background-color: #4c7274;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;