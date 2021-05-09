import { useState } from "react";
import { Grid } from "./styles";
import { accounts } from "./accounts";
import Account from "./Account";

function App() {
  const [_files, _setFiles] = useState({ accepted: [], rejected: [] });

  console.log(`_files`, _files);

  return (
    <Grid>
      {accounts.map((a) => (
        <Account
          key={a.acctId}
          account={a}
          files={_files}
          setFiles={_setFiles}
        />
      ))}
    </Grid>
  );
}

export default App;
