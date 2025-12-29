import React from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contact/Contacts";
import Skills from "./components/Skills/Skills";
import Particles from "react-tsparticles";
import Hero from "./components/Home/Hero";
import Intro from "./components/Home/Intro";
import { Div } from "./components/general/BaseComponents";

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
      <Div className="App overflow-x-hidden max-w-full" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Particles />
        <Hero />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </Div>
    </>
  );
}

export default App;
