import { useState } from 'react'
import { Grid } from 'components/Grid'
import { accounts } from './accounts'
import { Account } from 'Account'
import * as R from 'ramda'

export const App = () => {
  const [_fileList, _setFileList] = useState([])

  const _addFiles = (file) => {
    _setFileList(R.concat(file, _fileList))
  }

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
