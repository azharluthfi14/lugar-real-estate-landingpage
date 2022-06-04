import React from "react";
import Navbar from "./components/Navbar";
import IndexPages from "./pages";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <IndexPages />
      </main>
    </>
  );
};

export default App;
