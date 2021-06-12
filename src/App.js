import "./App.css";
// import Nav from "./components/Nav";
import Header from './components/Header'
import Shots from './components/Shots'

function App() {
  const espressoData = [
    {
      date: '6/10/21',
      beansWeight: 16,
      espressoWeight: 33.6,
      ratio: String(1 / (33.6 / 16)),
      flavor: 'bold'
    }
  ]

  return (
    <div className="container">
      <Header />
      <Shots espressoData={ espressoData }/>
    </div>
  );
}

export default App;
