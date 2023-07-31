import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Submit</Button>
      <Button>OK</Button>
      <Button>Click Me!</Button>
      <Button>Close</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
