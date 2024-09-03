import "./App.css";
import Urun from "./components/Urun";

function App() {
  return (
    <div className="App">
     <h1>Ürünler</h1>
      <div className="urunler">
        <Urun title="Künefe" price="₺25" />
        <Urun title="Baklava" price="₺125" />
        <Urun title="Baklava" price="₺125" />
        <Urun title="Baklava" price="₺125" />
        <Urun title="Baklava" price="₺125" />
        <Urun title="Baklava" price="₺125" />
        <Urun title="Baklava" price="₺125" />
        <Urun title="Baklava" price="₺125" />
        <Urun title="Baklava" price="₺125" />
        <Urun title="Baklava" price="₺125" />
        <Urun title="Baklava" price="₺125" />
      </div>
      
    </div>
  );
}

export default App;
