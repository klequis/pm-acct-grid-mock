/* ORIGINAL */
import { useState } from "react";
import { Grid, Article } from "./styles";
import { accounts } from "./accounts";
import { useDropzone } from "react-dropzone";
import * as R from "ramda";
import { DropZone } from "./DropZone";
import { groupFiles } from "./groupFiles";
import { customFileGetter } from "./customFileGetter";

const Account = ({ account, getRootProps, getInputProps }) => {
  return (
    <Article>
      <h1>
        {account.acctName} (x{account.acctNumber})
      </h1>
      <DropZone
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        account={account}
      />
      <p>
        This is the best computer money can buy, if you don’t have much money.
      </p>
    </Article>
  );
};

function App() {
  const [_files, _setFiles] = useState({ accepted: [], rejected: [] });

  const _onDrop = (acceptedFiles) => {
    console.log("_onDrop");
    const { accepted, rejected } = groupFiles(acceptedFiles);
    _setFiles({
      accepted: R.flatten([accepted, _files.accepted]),
      rejected: R.flatten([rejected, _files.rejected]),
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: _onDrop,
    getFilesFromEvent: (event) => customFileGetter(event),
  });

  console.log("_files", _files);
  return (
    <Grid>
      {accounts.map((a) => (
        <Account
          key={a.acctId}
          account={a}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
        />
      ))}
    </Grid>
  );
}

export default App;
