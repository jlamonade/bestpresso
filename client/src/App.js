import "./App.css";
import { useState } from 'react'
// import Nav from "./components/Nav";
import Header from "./components/Header";
import Shots from "./components/Shots";
import ShotForm from "./components/ShotForm";

function App() {
  const [espressoData, setEspressoData] = useState([
    {
      _id: 1,
      date: "6/10/21",
      beansWeight: 16,
      espressoWeight: 33.6,
      brewTime: 37,
      ratio: 33.6 / 16,
      flavor: "bitter",
      grind: 2
    },
    {
      _id: 2,
      date: "6/11/21",
      beansWeight: 16,
      espressoWeight: 32.1,
      brewTime: 23,
      ratio: (32.1 / 16).toFixed(1),
      flavor: "sour",
      grind: 3
    },
  ])

  const addShot = (shot) => {
    setEspressoData([...espressoData, shot])
  };

  const callAPI = async () => {
    const res = await fetch("http://localhost:9000/beans/shots")
    console.log(await res.json())
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
