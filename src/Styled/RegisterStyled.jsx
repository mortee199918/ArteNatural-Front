import styled from "@emotion/styled";

export const Registers = styled.h2`
    background-color: #6DAFB3;
    color: #FAD9FA;
    border-radius: 30px 30px 30px 30px;
    width: 25rem;
    text-align: center;
    margin: auto;
    margin-top: 80px;
    font-family: 'Caveat', cursive;
    font-size: 4em;
    text-shadow: 2px 2px 4px #000000;
    padding: 20px;

`
export const Form = styled.form`
     display: flex;
     flex-direction: column;
     align-items: center;
     

`
export const Container = styled.div`
    padding: 20px;
    margin: auto;
    height: fit-content;
    width: 25rem;
    text-align: center;
    background-color: #6DAFB3;
    border-radius: 30px 30px 30px 30px;
    margin-top: 60px;
    gap: 18px;
`
export const Input = styled.input `
     border-radius: 30px;
     border: 3px solid   #4081f1; 
     background-color:  #d9effa;
     text-align: center;
     padding: 10px;
     width: 100%;
     box-sizing: border-box;
     :focus{
        outline: none;
        border-color: #13056b;
        background-color: white;
      
     }

`
export const Label = styled.label `
  font-weight: bold;
  color: #FAD9FA;
  text-shadow: 1px 1px 2px #000;
  min-width: 130px; 
  text-align: center;
  font-size: 1.1em;

`
export const Boton = styled.button `
  border: 3px solid   #de98de; 
  background-color:  #FAD9FA;
  color: #7e0163;
  border-radius: 30px;
  padding: 12px 20px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
  &:hover{
     background-color: #7e0163;
     color: white;
  }

`
export const Select = styled.select `
  width: 85px;
  box-sizing: border-box;

`
export const Option = styled.option `
  border: 3px solid   #de98de; 
  background-color:  #FAD9FA;
  color: black;
  border-radius: 30px;
  border-radius: 30px 30px 30px 30px;
  margin-top: 20px;
`