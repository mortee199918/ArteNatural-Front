import styled from "@emotion/styled";

export const Title = styled.h1`
    background-color: #4c7274;
    color: var(--text-color);
    border-radius: 30px;
    width: fit-content;
    text-align: center;
    margin: 80px auto 2rem auto;
    font-size: 2.5em;
    font-family: 'Forte';
    text-shadow: 2px 2px 4px #000000;
    padding: 0.5rem 1.5rem;


`
export const Container = styled.div`
    border: 3px solid darkgreen; 
    background-color : #bceadb ;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    max-width:500px;
    margin: 80px auto 2rem auto;
    padding: 20px;


`
export const Texto = styled.p`
  font-weight: bold;
  label{
  color: darkgreen;
  }
  /* text-shadow: 1px 1px 2px #000; */
  min-width: 130px; 
  text-align: center;
  font-size: 1.1em;
`
export const ElBoton = styled.button`
    color: darkgreen;
    border: 3px solid   darkgreen; 
    background-color : #fff ;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    width: 70px;
    font-size: 1.1em;
    margin: auto;
    padding: 2px;
    :hover {
        background-color: #bbe4e7;
        cursor: pointer;
    }
    
`
export const Input = styled.input `
     border-radius: 30px;
     border: 3px solid darkgreen;
     
     text-align: center;
     padding: 10px;
     width: 100%;
     box-sizing: border-box;
    :focus{
         background-color: #e4ffe5;
         outline: none;
     }

`