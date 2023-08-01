import { useState } from "react";
import "./styles.css";

export default function App() {
  // let isActive = false;

  const [active, setActive] = useState(false);

  function handleClick() {
    // isActive = !isActive;
    // Check that the value changes correctly.
    setActive(!active);
    console.log(active);
  }

  return (
    <main>
      <div className={`box ${active ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {active ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
