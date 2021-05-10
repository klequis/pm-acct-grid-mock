import { useState, useEffect } from "react";
// import { DropDiv, DropMsgDiv, OnlyCSVWarn } from "./styles";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { Article } from "./styles";
import * as R from "ramda";

const fileExtensionValidator = (file) => {
  // console.log("file", file);
  const filename = file.name;
  const ext = filename.substr(filename.lastIndexOf(".") + 1);
  if (ext.toUpperCase() === "CSV") {
    return null;
  }
  return {
    code: "wrong-file-type",
    message: `Only CSV files can be imported`,
  };
};

const getBackgroundColor = (props) => (props.isDragActive ? "green" : "gray");

const Container = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${(props) => getBackgroundColor(props)};
`;

const DropZone = ({ account }) => {
  const [_acceptedFiles, _setAcceptedFiles] = useState([]);
  const [_rejectedFiles, _setRejectedFiles] = useState([]);

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    validator: fileExtensionValidator,
  });

  // s

  useEffect(() => {
    // console.log("effect", "called");
    console.log("_acceptedFiles", _acceptedFiles);
    console.log("acceptedFiles", acceptedFiles);
    if (acceptedFiles.length > 0) {
      const newFiles = R.concat(acceptedFiles, _acceptedFiles);
      _setAcceptedFiles(newFiles);
      console.log("newFiles", newFiles);
    }

    // _setAcceptedFiles();
  }, [acceptedFiles]);

  // const fileRejectionItems = fileRejections.map(({ file, errors }) => {
  //   _setRejectedFiles({
  //     file,
  //     errors,
  //   });
  //   return (
  //     <li key={file.path}>
  //       {file.path} - {file.size} bytes
  //       <ul>
  //         {errors.map((e) => (
  //           <li key={e.code}>{e.message}</li>
  //         ))}
  //       </ul>
  //     </li>
  //   );
  // });

  console.log("_acceptedFiles", _acceptedFiles);
  // console.log("acceptedFiles", acceptedFiles);

  return (
    <Article>
      <h1>
        {account.acctName} (x{account.acctNumber})
      </h1>
      <Container {...getRootProps({ isDragActive })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only files with name less than 20 characters will be accepted)</em>
      </Container>
      {/* <aside>
        <h4>Accepted files</h4>
        <ul>
          {_acceptedFiles.map((f) => {
            return (
              <li key={f.path}>
                {f.path} - {f.size} bytes
              </li>
            );
          })}
        </ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside> */}
    </Article>
  );
};

export default DropZone;
