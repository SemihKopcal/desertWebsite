import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "../../layouts/Navbar";
import Urun from "../../components/Urun";
// import Kadayif from "../../components/Kadayif";
// import Baklava from "../../components/Baklava";

function PageManager() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/urunler" element={<Urun />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default PageManager;
