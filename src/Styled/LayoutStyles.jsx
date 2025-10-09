import styled from "@emotion/styled";


export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--primary-bg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;

`
export const Brand = styled.div `
  font-size: 1.6em;
  font-weight: bold;
  color: var(--text-color);
  text-shadow: 1px 1px 2px #000;
`
export const Linked = styled.ul `
  display: flex;
  list-style: none;
  gap: 1.2rem;
   a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: bold;
  text-shadow: 1px 1px 2px #000;
  padding: 0.4rem 0.8rem;
  border-radius: 30px;
  transition: background 0.3s;
  cursor: pointer;
}
 a:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
`
export const Hamburguesa = styled.div `
  display: none;
  flex-direction: column;
  cursor: pointer;
 span {
  width: 25px;
  height: 3px;
  background: var(--text-color);
  margin: 3px 0;
}

`