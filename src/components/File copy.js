import styled from 'styled-components'
// import { CheckSquareFill, XSquareFill } from 'react-bootstrap-icons'
import { RedX } from 'RedX'
import { GreenCheck } from 'GreenCheck'

const FileDiv = styled.div`
  display: flex;
  ${'' /* padding-left: 10px; */}
  ${'' /* align-content: stretch;
  align-items: stretch; */}
  ${'' /* background-color: red; */}
`

const FileNameOuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  ${'' /* width: 100%; */}
  ${'' /* background-color: blue; */}
`

const FileNameDiv = styled.div`
  display: flex;
  min-width: 0;
`
const FileNameBaseSpan = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const FileNameExtSpan = styled.span`
  flex-shrink: 0;
`

const FileMessageDiv = styled.div`
  ${'' /* background-color: purple; */}
`

const RejectedFile = ({ file }) => {
  return (
    <FileDiv>
      <div>
        <RedX />
      </div>

      <FileNameOuterDiv>
        {/* <FileNameDiv>{file.name}</FileNameDiv> */}
        <FileNameDiv>
          <FileNameBaseSpan>
            this-file-name-is-way-too-long-to-fit-here
          </FileNameBaseSpan>
          <FileNameExtSpan>.txt</FileNameExtSpan>
        </FileNameDiv>
        <FileMessageDiv>
          <em>Must be CSV file.</em>
        </FileMessageDiv>
      </FileNameOuterDiv>
    </FileDiv>
  )
}

const AcceptedFile = ({ file }) => {
  return (
    <FileDiv>
      <GreenCheck />
      <FileNameDiv>{file.name}</FileNameDiv>
    </FileDiv>
  )
}

export const File = ({ file }) => {
  return file.accepted ? (
    <AcceptedFile file={file} />
  ) : (
    <RejectedFile file={file} />
  )
}

/* <div>{file.accepted ? <GreenCheck /> : <RedX color="red" />}</div>
      <FileNameSpan>
        {file.duplicate ? `duplicate-${file.name}` : file.name}
      </FileNameSpan> */

// export const File = ({ checkOrX = 'check', fileName }) => {
//   return (
//     <FileDiv>
//       {checkOrX === 'check' ? <GreenCheck /> : <RedX color="red" />}
//       <FileNameSpan>{fileName}</FileNameSpan>
//     </FileDiv>
//   )
// }
