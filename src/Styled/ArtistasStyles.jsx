import styled from "@emotion/styled";

export const Conatiner = styled.div `
    text-align: center;
    border: 3px solid   darkgreen; 
    background-color : #bceadb ;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    max-width:500px;
    margin: 60px auto 2rem auto;
    width: fit-content;
    margin: auto;
    margin-bottom: 30px;
    
`

export const Titulo = styled.h1`
    /* background-color: var(--primary-bg); */
    color: darkgreen;
    border-radius: 30px;
    width: fit-content;
    text-align: center;
    margin: 80px auto 2rem auto;
    font-size: 2.5em;
    /* text-shadow: 2px 2px 4px #000000; */
    padding: 0.5rem 1.5rem;
    font-family: "Forte";

`
export const ElBoton = styled.button`
    color: darkgreen;
    border: 3px solid   darkgreen; 
    background-color : #ffffff ;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    width: 150px;
    font-size: 1.1em;
    margin: auto;
    padding: 2px;
     :hover {
        background-color: #bbe4e7;
        cursor: pointer;
    }
   
    
`
export const Input = styled.input `
    color: darkgreen;
    border: 3px solid   #de98de; 
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
        background-color: #ffd7ff;
    }

`