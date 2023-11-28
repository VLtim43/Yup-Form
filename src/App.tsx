import { useEffect, useState } from "react";
import "./App.css";
import ShouldRender from "./utils/souldRender";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth > 1500); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth > 1500);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen w-screen bg-green-200">
      <p>Teste</p>
    </div>
  );
}

export default App;
