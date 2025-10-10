import styled from "@emotion/styled";

export const Main = styled.main `
  padding: 2rem;

`
export const Title = styled.h1 `
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
export const ArtWorks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

`
export const ArtCard = styled.div `
  background-color: var(--primary-bg);
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s;
`
export const ArtImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
  :hover {
  transform: translateY(-6px);
}
`
export const CardBody = styled.div`
  padding: 1.2rem;
`
export const ArtTitle = styled.h3`
  font-size: 1.3em;
  margin-bottom: 0.4rem;
  color: var(--text-color);
  text-shadow: 1px 1px 2px #000;
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
  display: flex;
  gap: 0.6rem;

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