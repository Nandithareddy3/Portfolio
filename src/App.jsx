// src/App.jsx
import { useState, useEffect } from "react";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [activePage, setActivePage] = useState("hero");

  useEffect(() => {
    document.body.style.overflow = "hidden"; // disable scroll globally
    return () => {
      document.body.style.overflow = "auto"; // cleanup if needed
    };
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "hero":
        return <Hero setActivePage={setActivePage} />;
      case "about":
        return <About />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "services":
        return <Services />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className={styles.app}>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className={styles.main}>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
