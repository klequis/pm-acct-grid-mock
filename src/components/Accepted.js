import styled from 'styled-components'

const AcceptedDiv = styled.div`
  margin-bottom: 20px;
`
export const Accepted = ({ children }) => {
  return (
    <AcceptedDiv>
      <h6>Accepted Files</h6>
      {children.map((c) => [c])}
    </AcceptedDiv>
  )
}
