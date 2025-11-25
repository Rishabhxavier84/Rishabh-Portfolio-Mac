import { Hero, Navbar, Dock } from "#Components";
import React from 'react'
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import { Resume,Safari,Terminal } from "#windows";


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
    </main>
  )
}
//2:16
export default App