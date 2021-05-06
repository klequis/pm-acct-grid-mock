import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-flow: column;
  padding: 2rem;
  margin: 0;
  border: 1px solid black;
  border-radius: 0.25rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

export const Box = styled.div`
  width: 100%;
  height: 188px;
  background-color: gray;
  margin: 12px 0;
`;
