import { DropZone } from 'DropZone'
import { groupFiles } from './groupFiles'
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

const checkForDuplicateFiles = (newFiles, currentFiles) => {
  const curFileNames = currentFiles.map((f) => f.name)
  return newFiles.map((f) => {
    const isDuplicate = R.any(R.equals(R.__, f.name), curFileNames)
    return addDuplicateProp(f, isDuplicate)
  })
}

export const Account = ({ account, files = [], addFiles }) => {
  const _onDrop = (acceptedFiles) => {
    // const { accepted, rejected } = groupFiles(acceptedFiles)
    // setFiles({
    //   accepted: R.flatten([accepted, files.accepted]),
    //   rejected: R.flatten([rejected, files.rejected])
    // })

    const checkedFiles = checkForDuplicateFiles(acceptedFiles, files)
    console.log('checkedFiles', checkedFiles)
    addFiles(acceptedFiles)
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: _onDrop,

    getFilesFromEvent: (event) => customFileGetter(event, account.acctId)
  })

  // const a = filterFiles(files, account.acctId)
  // console.log('files', files)
  // console.log('a', a)

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
            <File
              key={file.duplicate ? nanoid() : file.name}
              // key={nanoid()}
              // file={{
              //   name: 'this-is-a-very-long-file-name-wow-that-is-long.txt',
              //   accepted: false
              // }}
              file={file}
            />
          ))}
        </Files>
      </CardBody>
    </Card>
  )
}
