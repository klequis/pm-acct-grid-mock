import { useMemo, useRef } from "react";
import { Article } from "./styles";
import { groupFiles } from "./groupFiles";
import { useDropzone } from "react-dropzone";
import { customFileGetter } from "./customFileGetter";
import * as R from "ramda";
import styled from "styled-components";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const Account = ({ account, files, setFiles }) => {
  const _onDrop = (acceptedFiles) => {
    console.log("_onDrop");
    const { accepted, rejected } = groupFiles(acceptedFiles);
    setFiles({
      accepted: R.flatten([accepted, files.accepted]),
      rejected: R.flatten([rejected, files.rejected]),
    });
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop: _onDrop,
    getFilesFromEvent: (event) => customFileGetter(event, "1234"),
  });

  // console.log(`files ${account.acctId}`, files);
  return (
    <Article>
      <h1>
        {account.acctName} (x{account.acctNumber})
      </h1>
      <Container
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Container>
      <p>
        This is the best computer money can buy, if you don’t have much money.
      </p>
    </Article>
  );
};

export default Account;
