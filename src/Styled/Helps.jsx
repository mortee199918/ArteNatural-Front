import styled from "@emotion/styled";

export const Titulo = styled.h1`
    background-color: #6DAFB3;
    color: #FAD9FA;
    border-radius: 30px 30px 30px 30px;
    max-width: 65rem;
    text-align: center;
    margin: auto;
    margin-top: 50px;
    font-size: 4em;
    text-shadow: 2px 2px 4px #000000;

`
export const Granja = styled.div `
    margin: auto;
    height: fit-content;
    max-width: 100rem;
    text-align: center;
    background-color: #6DAFB3;
    color: white;
    border-radius: 30px 30px 30px 30px;
    margin-top: 44px;
    padding: 20px;
    margin-bottom: 20px;

`
export const SubTitulo = styled.h3 `
:after {
      content: "";
      display: flex;
      width: 15%; 
      height: 2px;
      background-color: white; 
      margin-left: 520px;
    }
`
export const Comentarios = styled.input `
 width: 350px;

`
export const Boton = styled.button`
    color: #E63EE6;
    border: 3px solid   #de98de; 
    background-color : #ffffff ;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    width: 80px;
    font-size: 1.1em;
    margin: auto;
    :hover {
        background-color: #9e479e;
        cursor: pointer;
    }
    
`
export const Puntos = styled.ul`
  list-style: none;  

`
export const Lineup = styled.p`
    font-size: large;
`