import { DropZone } from 'DropZone'
import { useDropzone } from 'react-dropzone'
import { customFileGetter } from './customFileGetter'
import * as R from 'ramda'
import { Card } from 'components/Card'
import { CardBody } from 'components/CardBody'
import { Files } from 'components/Files'
import { File } from 'components/File'
import { nanoid } from 'nanoid'

const filterFiles = (files, acctId) => {
  return files.reduce((result, file) => {
    if (file.acctId === acctId) {
      return R.append(file, result)
    }
    return result
  }, [])
}

const addDuplicateProp = (file, duplicate) => {
  Object.defineProperty(file, 'duplicate', {
    value: duplicate
  })
  return file
}

export const Account = ({ account, files = [], addFiles }) => {
  const _onDrop = (acceptedFiles) => {
    console.log('_onDrop: acceptedFiles', acceptedFiles)
    addFiles(acceptedFiles) // `addFiles` does a concat
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: _onDrop,

    getFilesFromEvent: (event) => customFileGetter(event, account.acctId, files)
  })

  return (
    <Card>
      <CardBody>
        <DropZone
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          account={account}
        />
        <Files>
          {filterFiles(files, account.acctId).map((file) => (
            <File key={file.duplicate ? nanoid() : file.name} file={file} />
          ))}
        </Files>
      </CardBody>
    </Card>
  )
}
