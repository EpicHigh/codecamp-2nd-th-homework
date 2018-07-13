import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOutIn = keyframes`
	0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const QuoteBox = styled.section`
  border-radius: 3px;
  position: relative;
  width: 450px;
  padding: 40px 50px;
  display: table;
  background-color: #fff;
  color: ${props => props.qbfontColor};
`;

export const QuoteText = styled.section`
  font-size: 1.75em;
  font-weight: 300;
  animation: 4s ${fadeIn} ease-out;
  ${props => props.click && `animation: 23s ${fadeOutIn} ease-out;`}
`;

export const QuoteAuthor = styled.section`
  font-size: 1em;
  text-align: right;
  margin-top: 0.5em;
  animation: 4s ${fadeIn} ease-out;
  ${props => props.click && `animation: 2s ${fadeOutIn} ease-out;`}
`;

export const ButtonBox = styled.button`
  float: right;
  margin-top: 1em;
  border: none;
  background-color: ${props => props.bgColor};
`;