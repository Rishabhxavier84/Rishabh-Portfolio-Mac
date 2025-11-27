import { Hero, Navbar, Dock } from "#Components";
import React from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import { Contact, Finder, Resume, Safari, Terminal } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Contact />
    </main>
  );
};
//2:16
export default App;
