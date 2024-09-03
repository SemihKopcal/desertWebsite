import React from 'react';
import Urun from '../../components/Urun';

function Home() {
  return (
    <div>
        <h1>urunler</h1>
        <section>
            <Urun title="Künefe" price="₺25" />
            <Urun title="Baklava" price="₺125" />
        </section>
        
    </div>
  )
}

export default Home