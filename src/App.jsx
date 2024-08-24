import "./App.css";
import Contact from "./components/CONTACT";
import Hero from "./components/HERO";
import Team from "./components/TEAM";
import WhatWeDO from "./components/WHAT_WE_DO";
import WhyUs from "./components/WHY_US";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="app">
      <Hero />
      <Element name="what-we-do">
        <WhatWeDO />
      </Element>
      <Element name="why-us">
        <WhyUs />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      {/* Add your other components here */}
    </div>
  );
}

export default App;
