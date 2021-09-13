import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  border-radius: 5px;
  border: none;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: white;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 90%;
    height: 40px;
    color: #000;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56FFA4, #59BC86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #FF5656, #C16868)"
        : "#fff"};
    border: none;
    border-radius: 5px;
  }
`;
