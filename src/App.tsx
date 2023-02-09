import "./App.css";

export function App() {
  return (
    <>
      <header className="header">
        <h1>
          <strong>Mega </strong> Ogłoszenia
        </h1>
        <button>Dodaj ogłoszenie</button>
        <div className="search">
          <input type="text" />
          <button>Szukaj</button>
        </div>
      </header>
      <div className="map"></div>
    </>
  );
}

export default App;
