// Styles
import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./assets/background.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'Urbanist', sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Urbanist", sans-serif;
    color: #fff;
    font-size: 70px;
    text-align: center;
    margin: 20px;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background: white;
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  .start {
    max-width: 200px;
  }
`;
