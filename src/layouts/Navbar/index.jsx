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
        <a href="#kunefe">Künefe</a>
        <a href="#baklava">Baklava</a>
        <a href="#kadayif">Kadayıf</a>
        <a href="#icecekler">İçecekler</a>
      </nav>
    </div>
  );
}

export default Navbar;
