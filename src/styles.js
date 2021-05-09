import styled from "styled-components";
import { theme } from "./style/theme";

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

// export const Box = styled.div`
//   height: 100px;
//   ${"" /* width: 100px; */}
//   background-color: blue;
//   margin: 10px;
// `;

// export const UploadFilesDiv = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   align-items: center;
//   width: 50%;
//   @media (max-width: ${theme.breakpoints.sm}) {
//     color: green;
//   }
// `;
// // min-width: 500px;
export const DropDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background-color: ${theme.colors.gray};
`;
// // border-color: #c7d1db;

export const DropMsgDiv = styled.div`
  text-align: center;
`;

// export const ButtonDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 20px 0;
//   width: 100%;
// `;

export const OnlyCSVWarn = styled.div`
  background-color: ${theme.colors.warning};
  color: ${theme.colors.white};
  padding-top: 4px;
`;

// export const AccountsDiv = styled.div`
//   display: flex;
// `;
