import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GsapBasics from "./playground/GsapBasics";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gsap" element={<GsapBasics />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

