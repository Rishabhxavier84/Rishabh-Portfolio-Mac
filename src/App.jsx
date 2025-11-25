import { Hero, Navbar, Dock } from "#Components";
import React from 'react'
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import Terminal from "#windows/Terminal";
import Safari from "#windows/Safari";


gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Dock />

      <Terminal />
      {/* <Safari /> */}
    </main>
  )
}
//1:44
export default App