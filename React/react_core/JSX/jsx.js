// Converter: https://transform.tools/html-to-jsx
// Get familiar with jsx by writing html in convertor and pay attention on result

// The goal is to separate html, jsx and js by practicing differentiation
// Under the hood, the whole process of creating component looks like:
// 1. write jsx eg. <h1>hello</h1>
// 2. Babel (tool that React use) convert jsx to js
// 3. React end process by creating html

// JSX to JS example
/**
 * Under JSX is React.createElement method 
 * that creates component with 3 argument, 
 * 1. html tag (as a string) - required, 
 * 2. object of properties (similar to attributes in html) - optional,
 * 3. and children (string or nested component) - optional
 * 
 * example:
 *   I jsx
 * <MyButton color="blue" shadowSize={2}>
 *   Click Me
 * </MyButton>
 * 
 *   II js
 * React.createElement(
 *   MyButton,
 *   {color: 'blue', shadowSize: 2},
 *   'Click Me'
 * )
 * 
 * Note: You don't need to dive deep into JSX or how React works right now
 */