// import { useState } from "react";
import { Grid } from './styles'
// import { accounts } from "./accounts";
// import Account from "./Account";
import { Mock } from './Mock'

function App() {
  // const [_files, _setFiles] = useState({ accepted: [], rejected: [] });

  // console.log(`_files`, _files);

  return <Mock />
}

export default App

/*

<div>
      <div className="card">
        <div className="card-body"></div>
      </div>
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
    </div>
*/
