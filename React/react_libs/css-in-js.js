// Styled-components


import styled from 'styled-components';

// Create a styled button component
const Button = styled.button`
  background: palevioletred;
  border: none;
  border-radius: 3px;
  color: white;
  padding: 0.5em 1em;
`;

// Use the Button component in a component
function MyComponent() {
  return (
    <div>
      <Button>Click me!</Button>
    </div>
  );
}