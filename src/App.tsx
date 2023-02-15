import { useState } from "react";
import { Header } from "./components/layout/Header";
import { Map } from "./components/Map/Map";
import { SearchContext } from "./context/search.context";

export function App() {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <Header />
        <Map />
      </SearchContext.Provider>
    </>
  );
}

export default App;
