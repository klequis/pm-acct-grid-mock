import styled from 'styled-components'
// import { CheckSquareFill, XSquareFill } from 'react-bootstrap-icons'
import { RedX } from 'RedX'
import { GreenCheck } from 'GreenCheck'
import { getFileName } from 'lib/getFileName'
import { getFileExtension } from 'lib/getFileExtension'

const FileContainerDiv = styled.div`
  display: flex;
`

const FileName = styled.div`
  display: flex;
  min-width: 0;
  align-items: center;
`

const FileNameBase = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 0 0 1px 5px;
`

const FileNameExtension = styled.span`
  flex-shrink: 0;
  padding: 0 0 1px 0;
`

const FileAccepted = ({ fileName, fileExt }) => {
  return (
    <FileContainerDiv id="Container">
      <FileName id="FileName">
        <GreenCheck />
        <FileNameBase id="FileNameBase">{fileName}</FileNameBase>
        <FileNameExtension id="FileNameExtension">{fileExt}</FileNameExtension>
      </FileName>
    </FileContainerDiv>
  )
}

const RejectMsgSpan = styled.span`
  padding-left: 21px;
  color: red;
`

const RejectMessage = ({ file }) => {
  if (!file.accepted) {
  }
}

const FileRejected = ({ file }) => {
  const { fileName, fileExt, accepted, duplicate } = file
  return (
    <div>
      <FileContainerDiv id="Container">
        <FileName id="FileName">
          <RedX />
          <FileNameBase id="FileNameBase">{fileName}</FileNameBase>
          <FileNameExtension id="FileNameExtension">
            {fileExt}
          </FileNameExtension>
        </FileName>
      </FileContainerDiv>
      <RejectMsgSpan></RejectMsgSpan>
    </div>
  )
}

export const File = ({ file }) => {
  const fileName = getFileName(file.name)
  const fileExt = `.${getFileExtension(file.name)}`
  return file.accepted && !file.duplicate ? (
    <FileAccepted fileName={fileName} fileExt={fileExt} />
  ) : (
    <FileRejected fileName={fileName} fileExt={fileExt} />
  )
}
