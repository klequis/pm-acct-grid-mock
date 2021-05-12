import { DropZone } from 'DropZone'
import { groupFiles } from './groupFiles'
import { useDropzone } from 'react-dropzone'
import { customFileGetter } from './customFileGetter'
import * as R from 'ramda'
import { Card } from 'components/Card'
import { CardBody } from 'components/CardBody'
import { Files } from 'components/Files'
import { File } from 'components/File'

export const Account = ({ account, files = [], setFiles }) => {
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

  console.log('files', files)

  return (
    <Card>
      <CardBody>
        <DropZone
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          account={account}
        />
        <Files>
          {files.map((file) => (
            <File
              checkOrX={file.accepted ? 'check' : 'x'}
              fileName={file.name}
            />
          ))}
        </Files>
      </CardBody>
    </Card>
  )
}
