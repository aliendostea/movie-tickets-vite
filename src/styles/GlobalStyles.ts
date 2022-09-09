import { createGlobalStyle } from "styled-components";

export const fontFamily1 = `'Cairo', sans-serif`;
export const fontFamily2 = `'Space Grotesk', sans-serif`;
export const fontFamily3 = `'Cormorant', serif`;

export const GlobalStyles = createGlobalStyle`
:root {
  --color-primary-dark: rgb(14, 26, 54);
  --color-primary-dark2: #0c172f;
  --color-ligth: aliceblue;
  --color-sencondary: #60dbb8;
  --color-error: #c12626;
  --border-radius-1: 35px;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: ${fontFamily1};
}

html {
  font-family: ${fontFamily1};
  font-size: 62.5%;
  scroll-behavior: smooth;
}


body {
  box-sizing: border-box;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0;
  margin: 0;
  color: aliceblue;
  scroll-behavior: smooth;
  overflow-x: hidden;
  background-color: var(--color-primary-dark);
}

a {
  &,
  &:link,
  &:visited,
  &:active {
    font-family: ${fontFamily1};
    text-decoration: none;
    color: inherit;
    outline: none;
  }
}

nav ul {
  list-style: none;
}

button {
  font-family: ${fontFamily1};
  width: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
}

img
{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
p {
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: normal;
}

span {
  color: inherit;
}

::selection {
  background-color: rgb(8, 8, 69);
  color: #6781eb;
}
`;
