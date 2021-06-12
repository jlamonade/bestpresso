import "./App.css";
import { useState } from 'react'
// import Nav from "./components/Nav";
import Header from "./components/Header";
import Shots from "./components/Shots";
import ShotForm from "./components/ShotForm";

function App() {
  const [espressoData, setEspressoData] = useState([
    {
      date: "6/10/21",
      beansWeight: 16,
      espressoWeight: 33.6,
      ratio: 33.6 / 16,
      flavor: "bitter",
    },
    {
      date: "6/11/21",
      beansWeight: 16,
      espressoWeight: 32.1,
      ratio: (32.1 / 16).toFixed(1),
      flavor: "sour",
    },
  ])

  const addShot = (shot) => {
    setEspressoData([...espressoData, shot])
  };

  const callAPI = async () => {
    const res = await fetch("http://localhost:9000/testAPI")
    console.log(await res.text())
  }

  return (
    <div className="container">
      <Header />
      <button className="btn btn-primary">Add Shot</button>
      <button onClick={callAPI}>Test API</button>
      <ShotForm onAdd={addShot} />
      <Shots espressoData={espressoData} />
    </div>
  );
}

export default App;
