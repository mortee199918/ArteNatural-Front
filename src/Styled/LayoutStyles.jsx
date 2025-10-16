import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

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
        --primary-bg: #4c7274;
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

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Brand = styled.div`
  font-size: 1.6em;
  font-weight: bold;
  color: var(--text-color);
  text-shadow: 1px 1px 2px #000;
  img {
    width: 300px;
    aspect-ratio: 5;
    @media (max-width: 768px) {
      width: 150px;
    }
  }
`;

export const Linked = styled.ul`
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

  /* Estilos para móviles */
  @media (max-width: 818px) {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: var(--primary-bg);
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    gap: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-150%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;

    &.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    a {
      width: 80%;
      text-align: center;
      padding: 0.6rem;
    }
  }
`;

export const Hamburguesa = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background: var(--text-color);
    margin: 3px 0;
    transition: 0.3s;
  }

  @media (max-width: 818px) {
    display: flex;
  }
`;

