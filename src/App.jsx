import Home from "./components/pages/Home";
import { ReactLenis } from "lenis/react";

const App = () => {
  return (
    <ReactLenis root>
      <main>
        <Home />
      </main>
    </ReactLenis>
  );
};

export default App;
