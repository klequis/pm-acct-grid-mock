import { useRef } from "react";
import { DropDiv, DropMsgDiv, OnlyCSVWarn } from "./styles";

export const DropZone = ({ getRootProps, getInputProps, account }) => {
  console.log("getRootProps", { ...getRootProps() });
  console.log("getInputProps", { ...getInputProps() });
  const _dropRef = useRef();
  return (
    <DropDiv
      id="DropDiv1"
      {...getRootProps({ acctId: account.acctId })}
      ref={_dropRef}
    >
      <input {...getInputProps()} />

      <DropMsgDiv>Drop files here or click to use dialog.</DropMsgDiv>
      <OnlyCSVWarn>
        <i>Only CSV files are accepted.</i>
      </OnlyCSVWarn>
    </DropDiv>
  );
};
