import { useState } from 'react'
import { Grid } from 'components/Grid'
import { accounts } from './accounts'
import { Account } from 'Account'
import * as R from 'ramda'
function App() {
  // const [_files, _setFiles] = useState({ accepted: [], rejected: [] })
  const [_fileList, _setFileList] = useState([])

  const _addFiles = (file) => {
    _setFileList(R.concat(file, _fileList))
  }

  console.log(`_files`, _fileList)

  return (
    <Grid>
      {accounts.map((a) => (
        <Account
          key={a.acctId}
          account={a}
          files={_fileList}
          addFiles={_addFiles}
        />
      ))}
    </Grid>
  )
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
