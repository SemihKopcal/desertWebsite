import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "../../layouts/Navbar";
import Urun from "../../components/Urun";
import QrMenu from "../../page/QrMenu";
// import Kadayif from "../../components/Kadayif";
// import Baklava from "../../components/Baklava";

function PageManager() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/qr-menu" element={<QrMenu />} />
        {/* okuttugu zaman localhost:3000/qr-menu ye gitsin boylece direkt menu sayfasini goruruz */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default PageManager;
