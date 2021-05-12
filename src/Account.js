import { DropZone } from 'DropZone'
import { groupFiles } from './groupFiles'
import { useDropzone } from 'react-dropzone'
import { customFileGetter } from './customFileGetter'
import * as R from 'ramda'
import { Card } from 'components/Card'
import { CardBody } from 'components/CardBody'

export const Account = ({ account, files, setFiles }) => {
  const _onDrop = (acceptedFiles) => {
    const { accepted, rejected } = groupFiles(acceptedFiles)
    setFiles({
      accepted: R.flatten([accepted, files.accepted]),
      rejected: R.flatten([rejected, files.rejected])
    })
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: _onDrop,
    getFilesFromEvent: (event) => customFileGetter(event, account.acctId)
  })

  return (
    <Card>
      <CardBody>
        <DropZone
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          account={account}
        />
      </CardBody>
    </Card>
  )
}
