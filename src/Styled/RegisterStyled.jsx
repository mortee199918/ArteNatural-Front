import styled from "@emotion/styled";

export const Registers = styled.h2`
    /* background-color: #6DAFB3; */
    color: darkgreen;
    border-radius: 30px 30px 30px 30px;
    width: 25rem;
    text-align: center;
    margin: auto;
    margin-top: 80px;
    font-family: 'Forte', cursive;
    font-size: 4em;
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
    background-color: #bceadb;
    border-radius: 30px 30px 30px 30px ;
    margin-top: 60px;
    gap: 18px;
    border: 3px solid darkgreen;
`
export const Input = styled.input `
    color: darkgreen;
    border: 3px solid   darkgreen; 
    background-color : #ffffff ;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    width: 350px;
    font-size: 1.1em;
    margin: auto;
    :hover {
        background-color: #e3e3e3;
        cursor: pointer;
    }
    :focus {
        background-color:  #eef8f3;
    }
`
export const Label = styled.label `
  font-weight: bold;
  color: darkgreen;
  /* text-shadow: 1px 1px 2px #000; */
  min-width: 130px; 
  text-align: center;
  font-size: 1.1em;

`
export const Boton = styled.button `
  border: 3px solid darkgreen; 
  background-color:  #FFF;
  color: darkgreen;
  border-radius: 30px;
  padding: 12px 20px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
  &:hover{
     background-color: #bbe4e7;
     
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