import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Technology from "./components/pages/Technology";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

import { ReactLenis } from "lenis/react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <ReactLenis root>
      <main className="relative z-0 h-auto w-auto bg-[#F8F5F2]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </ReactLenis>
  );
};

export default App;
