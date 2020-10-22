import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;
export const Title = styled.h1`
  width: 100%;
  color: white;
  text-align: center;
  font-size: 48px;
  font-weight: 500;
`;
export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;
export const Name = styled.p`
  color: #808080;
  font-size: 16px;
  text-overflow: ellipsis;

  &:hover {
    color: #e5e5e5;
    font-weight: bold;
  }
`;
export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  cursor: pointer;
`;
export const Item = styled.li`
  list-style-type: none;
  max-width: 200px;
  max-height: 200px;
  text-align: center;
  margin-right: 30px;

  &::last-of-type {
    margin-right: 0;
  }

  &:hover > ${Picture} {
    border: 3px solid white;
  }
  &:hover > ${Name} {
    color: white;
    font-weight: bold;
  }
`;
