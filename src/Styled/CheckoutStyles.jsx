// src/Styled/CheckoutStyles.js
import styled from "@emotion/styled";

export const CheckoutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
    /* background-color: #6DAFB3; */
    color: darkgreen;
    /* border-radius: 30px 30px 30px 30px; */
    width: 50rem;
    text-align: center;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 60px;
    font-size: 4em;
    /* text-shadow: 2px 2px 4px #000000; */
    font-family: 'Forte';
`;
   

export const Section = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 1.2rem;
  color: #4c7274;
  font-size: 1.3rem;
`;

export const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ItemInfo = styled.div`
  flex: 1;
  h4 {
    margin: 0 0 0.3rem 0;
    color: #333;
  }
  p {
    margin: 0.2rem 0;
    font-size: 0.9rem;
    color: #555;
  }
`;

export const TotalAmount = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  text-align: right;
  margin-top: 1rem;
  color: #28a745;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.4rem;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  max-width: 20rem;
  &:focus {
    outline: none;
    border-color: #4c7274;
  }
`;

export const Select = styled.select`
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 0.5rem;
`;

export const PaymentOption = styled.div`
  padding: 0.8rem;
  border: 2px solid ${(props) => (props.active ? "#4c7274" : "#ddd")};
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#f0f8f8" : "#fafafa")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transition: all 0.2s;
  &:hover {
    border-color: #4c7274;
    background: #f0f8f8;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #4c7274;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background-color: #3e5a5c;
  }
`;

export const BackLink = styled.button`
  margin-top: 2rem;
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    color: #4c7274;
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  background: #ffecec;
  padding: 0.6rem;
  border-radius: 4px;
  margin-top: 1rem;
  font-weight: bold;
`;