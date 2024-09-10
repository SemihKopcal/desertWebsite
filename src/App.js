import "./App.css";
import PageManager from "./features/PageManager";
import Urun from "./components/Urun";

function App() {
  return (
    <div className="App">
      <PageManager />
      <h1 id="kadayif">Kadayif</h1>
      <Urun title="Kadayif" price="10 TL" />
      <h1 id="baklava">Baklava</h1>
      <Urun title="baklava" price="10 TL" />

    </div>
  );
}

export default App;
