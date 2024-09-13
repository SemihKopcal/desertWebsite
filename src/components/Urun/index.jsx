import React from "react";
import styles from "./styles.module.css";

function Urun({ title, price, src }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={src} alt="image" className={styles.image}/>
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
}

export default Urun;
