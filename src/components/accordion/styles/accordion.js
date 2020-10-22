import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
`;
export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  margin: auto;
  max-width: 815px;
  flex-direction: column;

  @media only screen and (max-width: 950px) {
    padding: 60px 30px;
  }
`;
export const Item = styled.div`
  color: white;
  margin: auto;
  margin-bottom: 10px;
  max-width: 800px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }
  @media only screen and (max-width: 950px) {
    max-width: 500px;
  }

  @media only screen and (max-width: 600px) {
    max-width: 450px;
  }
`;
export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media only screen and (max-width: 950px) {
    font-size: 35px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background: #303030;
  padding: 0.8em 1.2em;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    img {
      width: 16px;
    }
  }
`;
export const Body = styled.div`
  background: #303030;
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  padding: 0.8em 2.2em 0.8em 1.2em;
  font-weight: normal;
  line-height: normal;
  white-space: pre-wrap;
  user-select: none;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const Icon = styled.div``;
