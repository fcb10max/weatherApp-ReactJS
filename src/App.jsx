import { useState } from "react";
import Home from "./Components/Home";


function App() {
  const [pos, setPos] = useState('static');

  return (
    <div style={{position: pos}}>
      <Home setPos={setPos} />
    </div>
  );
}

export default App;
