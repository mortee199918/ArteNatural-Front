import styled from "@emotion/styled";

export const Conatiner = styled.div `
    text-align: center;
    border: 3px solid   #de98de; 
    background-color : #FAD9FA ;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    max-width:500px;
    margin: 80px auto 2rem auto;
    width: fit-content;
    margin: auto;
    
`

export const Titulo = styled.h1`
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
export const ElBoton = styled.button`
    color: #E63EE6;
    border: 3px solid   #de98de; 
    background-color : #ffffff ;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    width: 150px;
    font-size: 1.1em;
    margin: auto;
     :hover {
        background-color: #ffa8ff;
        cursor: pointer;
    }
    :focus {
        background-color: #E63EE6;
    }
    
`
export const Input = styled.input `
    color: #E63EE6;
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