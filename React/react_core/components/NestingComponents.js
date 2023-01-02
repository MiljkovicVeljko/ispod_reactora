// Composition of Components and children props

// pass content between open and closing tags
<ParentComponent>
  <div>
    <h1>Title</h1>
    <p>Lorem ipsum dolor sit amet consectetur</p>
  </div>
</ParentComponent>

// accept content via props.children
function ParentComponent(props) {
  return (
    <div>
      <h1>Title</h1>
      {props.children}
    </div>
  )
}
