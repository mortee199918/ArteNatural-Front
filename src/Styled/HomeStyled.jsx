import styled from "@emotion/styled";
import {css, Global} from "@emotion/react";

export const GlobalStyles = () => (
  <Global
  
    styles={css`
    
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Press+Start+2P&display=swap');
        --primary-bg: #6DAFB3;
        --text-color: #FAD9FA;
        --button-bg: black;
        --button-text: white;
      }

      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f0f0f0;
        color: var(--text-color);
      }
    `}
  />
);
export const Main = styled.main `
  padding: 2rem;

`
export const Title = styled.h1 `
 
  /* background-color: var(--primary-bg); */
  color: darkgreen;
  border-radius: 30px;
  width: fit-content;
  text-align: center;
  margin: 30px auto 2rem auto;
  font-size: 4.5em;
  /* text-shadow: 2px 2px 4px #000000; */
  padding: 0.5rem 1.5rem;
  /* box-shadow: 4px 4px 12px #003c0c; */
  font-family: 'Forte';
  font-weight: 200;
`
export const ArtWorks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 60px auto;

`
export const ArtCard = styled.div `
  background-color: var(--primary-bg);
  border-radius: 30px;
  overflow: hidden;
  border: 3px solid #003c0c88;
  box-shadow: 4px 4px 12px #003c0c;
  transition-duration: 0.3s;
  filter: brightness(0.75);
  &:hover {
    filter: brightness(1);
  }
`
export const ArtImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
`

export const CardBody = styled.div`
  padding: 1.2rem;
`
export const ArtTitle = styled.h3`
  font-size: 1.3em;
  margin-bottom: 0.4rem;
  color: var(--text-color);
  text-shadow: 1px 1px 2px #000;
  font-family: 'Caveat', cursive;
`
export const ArtName = styled.p `
  color: var(--text-color);
  font-weight: bold;
  text-shadow: 1px 1px 2px #000;
  margin-bottom: 0.6rem;
  font-size: 1em;
`
export const Descripcion = styled.p`
  color: var(--text-color);
  text-shadow: 1px 1px 2px #000;
  margin-bottom: 1rem;
  line-height: 1.4;
  font-size: 0.95em;
`
export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Prince = styled.span`
  font-weight: bold;
  color: var(--text-color);
  text-shadow: 1px 1px 2px #000;
  font-size: 1.2em;
`
export const CardBoton = styled.div `
a {
  text-decoration: none;
  color: white;
}
background-color: #024402;
border: 3px solid #012a01;
padding: 0.5rem 1rem;
border-radius: 30px;
font-weight: bold;
cursor: pointer;
transition: opacity 0.3s;
&:hover {
  opacity: 0.9;
  transform: scale(1.1);
}

`
export const ElBoton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  background-color: var(--button-bg);
  color: var(--button-text);
  transition: opacity 0.3s;
  :hover {
  opacity: 0.9;
}
`