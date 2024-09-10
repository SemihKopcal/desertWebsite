import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Navbar() {
  return (
    <div>
      <title>QR Menu</title>
      <header className={styles.header}>
        <div className={styles.qrMenu}>QR Menu</div>
      </header>

      <nav>
        <Link to="kunefe">Künefe</Link>
        <Link to="baklava">Baklava</Link>
        <Link to="kadayif">Kadayıf</Link>
        <Link to="icecekler">İçecekler</Link>
      </nav>
    </div>
  );
}

export default Navbar;
