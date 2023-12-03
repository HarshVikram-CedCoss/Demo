import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import NoPageFound from "./components/NoPageFound";
import Body from "./components/Body";

function App() {
  const routes = [
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/*",
      element: <NoPageFound />,
    },
  ];
  return (
    <div className="App">
      <Routes>
        {routes.map((routes) => (
          <Route
            key={routes.path}
            path={routes.path}
            element={routes.element}
          ></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
