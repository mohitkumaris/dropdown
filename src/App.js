import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const [selected, setSelected] = useState("");
  const fruits = [
    { label: "", value: "0" },
    { label: "Fruit", value: "fruit" },

    { label: "Vegetable", value: "vegetable" },

    { label: "Meat", value: "meat" },
  ];

  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div className="App">
      <Dropdown labelText={selected} options={fruits} onChange={handleChange} />
      {selected}
    </div>
  );
}

export default App;
