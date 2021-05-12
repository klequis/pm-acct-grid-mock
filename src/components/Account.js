import { useMemo } from 'react'
import { Article } from './styles'
import { DropZone } from './DropZone'
import { groupFiles } from './groupFiles'
import { useDropzone } from 'react-dropzone'
import { customFileGetter } from './customFileGetter'
import * as R from 'ramda'
import styled from 'styled-components'

const Account = ({ account, files, setFiles }) => {
  const _onDrop = (acceptedFiles) => {
    console.log('_onDrop')
    const { accepted, rejected } = groupFiles(acceptedFiles)
    setFiles({
      accepted: R.flatten([accepted, files.accepted]),
      rejected: R.flatten([rejected, files.rejected])
    })
  }

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop: _onDrop,
    getFilesFromEvent: (event) => customFileGetter(event, account.acctId)
  })

  const Wrapper = styled.div``

  // const style = useMemo(
  //   () => ({
  //     ...baseStyle,
  //     ...(isDragActive ? activeStyle : {}),
  //     ...(isDragAccept ? acceptStyle : {}),
  //     ...(isDragReject ? rejectStyle : {}),
  //   }),
  //   [isDragActive, isDragReject, isDragAccept]
  // );

  // console.log(`files ${account.acctId}`, files);
  return (
    <div>
      <DropZone
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        account={account}
      />
      <div>hi</div>
    </div>
  )
}

export default Account
