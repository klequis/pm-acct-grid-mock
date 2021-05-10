import { useRef } from "react";
import { DropDiv, DropMsgDiv, OnlyCSVWarn } from "./styles";

export const DropZone = ({ getRootProps, getInputProps, account }) => {
  const _dropRef = useRef();
  return (
    <DropDiv id="DropDiv1" {...getRootProps()} ref={_dropRef}>
      <input {...getInputProps()} />
      <div>Drag & Drop or click to add files for account</div>
      <div>{account.acctName}</div>
      <div>x{account.acctNumber}</div>
    </DropDiv>
  );
};

/*

<DropMsgDiv>Drop files here or click to use dialog.</DropMsgDiv>
      <OnlyCSVWarn>
        <i>Only CSV files are accepted.</i>
      </OnlyCSVWarn>

      */
