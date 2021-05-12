import styled from 'styled-components'
// import { CheckSquareFill, XSquareFill } from 'react-bootstrap-icons'
import { RedX } from 'RedX'
import { GreenCheck } from 'GreenCheck'

const FileDiv = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
`

const FileNameSpan = styled.span`
  margin-left: 10px;
  padding: 0; */}
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`

export const File = ({ checkOrX = 'check', fileName }) => {
  return (
    <FileDiv>
      {checkOrX === 'check' ? <GreenCheck /> : <RedX color="red" />}
      <FileNameSpan>{fileName}</FileNameSpan>
    </FileDiv>
  )
}
