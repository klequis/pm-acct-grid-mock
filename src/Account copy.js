import { useMemo, useRef } from "react";
import { Article } from "./styles";
import { groupFiles } from "./groupFiles";
import { useDropzone } from "react-dropzone";
import { customFileGetter } from "./customFileGetter";
import * as R from "ramda";
import { DropDiv, DropMsgDiv, OnlyCSVWarn } from "./styles";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

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

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const _dropRef = useRef();

  // console.log(`files ${account.acctId}`, files);
  return (
    <Article>
      <h1>
        {account.acctName} (x{account.acctNumber})
      </h1>
      <div id="DropDiv1" {...getRootProps({ style })} ref={_dropRef}>
        <input {...getInputProps()} />
        <div>Drop files here or click to use dialog.</div>
        <div>
          <i>Only CSV files are accepted.</i>
        </div>
      </div>
      <p>
        This is the best computer money can buy, if you don’t have much money.
      </p>
    </Article>
  );
};

export default Account;