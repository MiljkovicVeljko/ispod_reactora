// Converter: https://transform.tools/html-to-jsx
// Get familiar with jsx by writing html in convertor and pay attention on result

// Practice converting Class component to Functional component and back

function SomeFnComponent() {
  return (
    <>
      {/* Hello world */}
      <div className="awesome" style={{ border: "1px solid red" }}>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" id="name" />
      </div>
      <p>Enter your HTML here</p>
    </>
  )
}

class SomeClassComponent extends React.Component {
  render() {
    return (
      <>
        {/* Hello world */}
        <div className="awesome" style={{ border: "1px solid red" }}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" />
        </div>
        <p>Enter your HTML here</p>
      </>
    )
  }
}