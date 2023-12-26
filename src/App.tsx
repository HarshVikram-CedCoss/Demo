import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import NoPageFound from "./components/NoPageFound";
import Body from "./components/Body";
import Resturants from "./components/Resturants";
import UserContext from "./Utilities/UserContext";

function App() {
  const [isUser, setIsUser] = useState<string>();
  useEffect(() => {
    setIsUser("Harsh Vikram Singh");
  }, []);
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
      path: "/resturants/:resId",
      element: <Resturants />,
    },
    {
      path: "/*",
      element: <NoPageFound />,
    },
  ];
  return (
    <UserContext.Provider value={{ loggedInUser: isUser, setIsUser }}>
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
    </UserContext.Provider>
  );
}

export default App;
