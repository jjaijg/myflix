import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 45px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media only screen and (max-width: 950px) {
    padding: 60px 30px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;

  @media only screen and (max-width: 950px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 10px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
  color: #757575;
`;

export const Text = styled.p`
  font-size: 13px;
  margin-bottom: 40px;
  color: #757575;
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
