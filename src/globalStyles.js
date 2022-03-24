import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  /* background: ${({ primary }) => (primary ? "#4b59f7" : "#0467fb")}; */
  background: ${({ primary }) => (primary ? "#826F66" : "#C69B7B")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ primary }) => (primary ? "#C69B7B" : "#826F66")};
    transition: all 0.3s ease-out;
   }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;
export default GlobalStyle;
