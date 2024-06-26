import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import ShowsGrid from "./components/screens/showsGrid/ShowsGrid.jsx";
import ShowSingle from "./components/screens/showSingle/ShowSingle.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<ShowsGrid />} />
          <Route path=":selectedShowType/:id" element={<ShowSingle />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
