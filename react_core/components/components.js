// Practice converting Class component to Functional component and back
/**
 * Rules of component
 * 1. Name of component must be Capitalized
 * 2. Component need to return jsx 
 * 
 * There is difference between 2 types of components
 * 1. Component contain logic - stateful component
 * 2. Component without logic - presentation/dumb component
 * 
 * Note: Before react version 16.8 functional component was just dumb component
 */
function SomeFnComponent() {
  return (
    <div>
      <div className="awesome" style={{ border: "1px solid red" }}>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" id="name" />
      </div>
      <p>Enter your HTML here</p>
    </div>
  )
}

class SomeClassComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="awesome" style={{ border: "1px solid red" }}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" />
        </div>
        <p>Enter your HTML here</p>
      </div>
    )
  }
}