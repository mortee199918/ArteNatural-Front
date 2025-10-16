import styled from "@emotion/styled";

export const Title = styled.h1`
    background-color: var(--primary-bg);
    color: var(--text-color);
    border-radius: 30px;
    width: fit-content;
    text-align: center;
    margin: 80px auto 2rem auto;
    font-size: 2.5em;
    text-shadow: 2px 2px 4px #000000;
    padding: 0.5rem 1.5rem;

`
export const Container = styled.div`
    border: 3px solid   #de98de; 
    background-color : #FAD9FA ;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    max-width:500px;
    margin: 80px auto 2rem auto;

`
export const Texto = styled.p`
  font-weight: bold;
  color: #E63EE6;
  text-shadow: 1px 1px 2px #000;
  min-width: 130px; 
  text-align: center;
  font-size: 1.1em;
`
export const ElBoton = styled.button`
    color: #E63EE6;
    border: 3px solid   #de98de; 
    background-color : #ffffff ;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    width: 50px;
    font-size: 1.1em;
    margin: auto;
    :hover {
        background-color: #9e479e;
        cursor: pointer;
    }
    
`
export const Input = styled.input `
     border-radius: 30px 30px 30px 30px;
     text-align: center;
     padding: 10px;
     width: 100%;
     box-sizing: border-box;

`