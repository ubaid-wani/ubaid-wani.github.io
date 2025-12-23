import React from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contact/Contacts";
import Skills from "./components/Skills/Skills";
import Particles from "react-tsparticles";

const App = () => {
  const [load, updateLoad] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <div>
          <Particles />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contacts />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
