import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top:20px;
  flex-wrap: wrap;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center
  }
`;

export const Title = styled.h2`
  font-size: 19.2px;
  text-align: center;
  color: white;

  @media only screen and (max-width: 950px) {
    font-size: 16px;
    line-height: 22px;
  } 
`;

export const Input = styled.input`
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  border: none;
  max-width: 450px;
  width: 100%;
  outline: none;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 20px;
  background: #e50914;
  color: white;
  border: none;
  text-transform: uppercase;
  padding: 032px;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  @media only screen and (max-width: 950px) {
    height: 40px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }

  img {
    filter: brightness(0) invert(1);
    margin-left: 10px;
    width: 24px;

    @media only screen and (max-width: 950px) {
      width: 16px;
    }
  }
`;

export const Break = styled.div`
flex-basis: 100%;
height:  0;
`
