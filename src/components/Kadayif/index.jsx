import React from "react";
import styles from "./styles.module.css";

function Kadayif({title, price}) {
  return (
    <section>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src="/logo192.png" alt="" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.price}>{price}</p>
        </div>
      </div>
    </section>
  );
}

export default Kadayif;
