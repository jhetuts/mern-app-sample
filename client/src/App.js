import React from "react";
import axios from "axios";

function App() {
  const getSample = () => {
    axios
      .get("/v1/api/logs")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <button onClick={getSample}>Get Sample</button>
    </div>
  );
}

export default App;
