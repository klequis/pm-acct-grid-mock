// import { Area } from 'components/Area'
// import { colors } from 'appWords'
import styled from 'styled-components'
// import { XSquareFill } from 'react-bootstrap-icons'
import { theme } from 'style/theme'
import { RedX } from './RedX'

const CSVWarningDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  ${'' /* background-color: ${theme.colors.warning}; */}
  ${'' /* opacity: 0.1; */}
  ${'' /* border: 1px solid red; */}
  padding: 8px;
  border-radius: 0.5em;
  background-color: #4a4a4a;
  background-color: #424242;
`

const MessageDiv = styled.div`
  margin-left: 10px;
`

export const CSVWarning = () => {
  return (
    <CSVWarningDiv>
      <div>
        <RedX color="red" />
      </div>
      <MessageDiv>
        All files must be CSV format with a .csv extension.
      </MessageDiv>
    </CSVWarningDiv>
  )
}

/*
   <MessageSpan>
        All files must be CSV format with a .csv extension.
      </MessageSpan>
*/
