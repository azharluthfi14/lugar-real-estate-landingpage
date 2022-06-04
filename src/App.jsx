import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
};

export default App;
