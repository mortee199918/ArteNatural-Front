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
export const Imagen = styled.img`
    margin: auto;
    width: 100%;
    aspect-ratio:1;
    box-sizing: border-box;
    padding: 10px;
    border: 3px solid   #de98de; 
    background-color : #FAD9FA ;
    text-align: center;
    border-radius: 30px 30px 30px 30px;

`
export const ContainerDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
`

