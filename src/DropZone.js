import { useRef } from 'react'
// import { DropDiv, DropMsgDiv, OnlyCSVWarn } from "./styles";
import styled from 'styled-components'
import { Area } from './components/Area'

const DropZoneDiv = styled.div`
  text-align: center;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 0;
  margin-bottom: 20px;
`

export const DropZone = ({ children }) => {
  return (
    <Area>
      <DropZoneDiv>{children}</DropZoneDiv>
    </Area>
  )
}

/*
export const DropZone = ({ getRootProps, getInputProps, account }) => {
  const _dropRef = useRef();
  return (
    <div
      // style={{ backgroundColor: "green", padding: 5 }}
      // className="card bg-primary"
      id="DropDiv1"
      {...getRootProps()}
      ref={_dropRef}
    >
      <input {...getInputProps()} />
    </div>
  );
};

*/

/*

<DropMsgDiv>Drop files here or click to use dialog.</DropMsgDiv>
      <OnlyCSVWarn>
        <i>Only CSV files are accepted.</i>
      </OnlyCSVWarn>

      */
