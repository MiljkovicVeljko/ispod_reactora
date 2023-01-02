/**
 * React Router is a popular JavaScript library for routing in React apps. 
 * It allows you to define the routes in your app, and the components that should be rendered for each route.
 * 
 * Here's a basic example of how to use React Router in a React app:
 * 
 */

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Router>
  );
}

/**
 * In this example, we have imported the BrowserRouter component from react-router-dom and wrapped our app in it. 
 * We have also imported the Route component. 
 * The Route component is used to define a route in our app. 
 * Each Route component takes a path prop, which is a string that defines the path that the route should match. 
 * When the current URL matches the path, the component specified in the Route component will be rendered.
 * 
 * For example, when the URL is /, the Home component will be rendered. 
 * When the URL is /about, the About component will be rendered. 
 * And when the URL is /contact, the Contact component will be rendered.
 * 
 * There are many other features and options available in React Router, 
 * such as the ability to use dynamic routes and pass route params to your components. 
 * You can learn more about React Router in the official documentation: https://reactrouter.com/
 */