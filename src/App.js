// Import des module React
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";
// Import des fichiers
// import dataJson from "./logements.json";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/PageNotFound";
import FicheLogements from "./pages/Logements/FicheLogements";
import Loader from "./components/Loader/Loader";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FicheLogement/:id" element={<FicheLogements />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
