import React from "react";
import Urun from "../../components/Urun";
import styles from "./styles.module.css";

function QrMenu() {
  return (
    <div className={styles.container}>
      <h1 id="kunefe">Kunefe</h1>
      <section className={styles.kunefeSection}>
        <Urun src="/image.jpg" title="Künefe" price="₺25" />
        <Urun src="/sutlukahveresmi.png" title="Künefe" price="₺25" />
        <Urun src="/sutlukahveresmi.png" title="Künefe" price="₺25" />
        <Urun src="/sutlukahveresmi.png" title="Künefe" price="₺25" />
        <Urun src="/sutlukahveresmi.png" title="Künefe" price="₺25" />
      </section>
      <h1 id="baklava">Baklava</h1>
      <section className={styles.baklavaSection}>
        <Urun src="/sutlukahveresmi.png" title="Baklava" price="₺125" />
        <Urun src="/sutlukahveresmi.png" title="Baklava" price="₺125" />
        <Urun src="/sutlukahveresmi.png" title="Baklava" price="₺125" />
        <Urun src="/sutlukahveresmi.png" title="Baklava" price="₺125" />
        <Urun src="/sutlukahveresmi.png" title="Baklava" price="₺125" />
        <Urun src="/sutlukahveresmi.png" title="Baklava" price="₺125" />
        <Urun src="/sutlukahveresmi.png" title="Baklava" price="₺125" />
      </section>
      <h1 id="kadayif">Kadayıf</h1>
      <section className={styles.kadayifSection}>
        <Urun src="/sutlukahveresmi.png" title="Kadayıf" price="₺50" />
        <Urun src="/sutlukahveresmi.png" title="Kadayıf" price="₺50" />
        <Urun src="/sutlukahveresmi.png" title="Kadayıf" price="₺50" />
        <Urun src="/sutlukahveresmi.png" title="Kadayıf" price="₺50" />
        <Urun src="/sutlukahveresmi.png" title="Kadayıf" price="₺50" />
        <Urun src="/sutlukahveresmi.png" title="Kadayıf" price="₺50" />
      </section>
      <h1 id="icecekler">İçecekler</h1>
      <section className={styles.iceceklerSection}>
        <Urun src="/sutlukahveresmi.png" title="Ayran" price="₺5" />
        <Urun src="/sutlukahveresmi.png" title="Kola" price="₺5" />
        <Urun src="/sutlukahveresmi.png" title="Su" price="₺2" />
        <Urun src="/sutlukahveresmi.png" title="Çay" price="₺3" />
        <Urun src="/sutlukahveresmi.png" title="Kahve" price="₺5" />
      </section>
    </div>
  );
}

export default QrMenu;
