import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/about";
import Menu from "./pages/menu";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleCount = () => {
    let c = count;
    c++;
    setCount(c);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    return window.addEventListener("resize", hideMenu);
    // return () => {
    //   window.addEventListener("resize", hideMenu);
    // };
  });

  return (
    <>
      <Navbar toggle={toggle} count={count} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/menu"
          render={(props) => <Menu handleCart={handleCount} />}
        />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
