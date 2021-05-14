export const Rejected = ({ children }) => {
  // console.log('children', children.length)
  return (
    <div>
      <h6>Rejected Files</h6>
      {children.map((c) => [c])}
    </div>
  )
}
