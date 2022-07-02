import './App.css';
import { useState } from 'react'; 

function App() {

  const [paino, setPaino] = useState();
  const [pituus, setPituus] = useState();
  const [painoindeksi, setPainoindeksi] = useState()
  const [vaara, setVaara] = useState()
  const [style, setStyle] = useState('tyhja');
  const TulostaPainoindeksi = () => {
    let indeksi = ((paino/pituus/pituus)*10000).toFixed(2)

    switch (true) {
      case (indeksi < 15):
        setVaara("Sairaalloinen alipaino");
        setStyle("Red");
        break
      case (indeksi < 17.01):
        setVaara("Merkittävä alipaino");
        setStyle("orange");
        break
      case (indeksi < 18.5):
        setVaara("Normaalia alhaisempi paino");
        setStyle("yellow");
        break
      case (indeksi < 25.01):
        setVaara("Normaali paino");
        setStyle("green");
        break
      case (indeksi < 30.01):
        setVaara("Lievä ylipaino");
        setStyle("yellow");
        break
      case (indeksi < 35.01):
        setVaara("Merkittävä ylipaino");
        setStyle("yellow");
        break
      case (indeksi < 40.01):
        setVaara("Vaikea ylipaino");
        setStyle("orange");
        break
      case (indeksi > 40):
        setVaara("Sairaallloinen ylipaino");
        setStyle('Red');
        break
      } 
    setPainoindeksi(`Painoindeksi on: ${indeksi}`)
  }
  
  return (
    <main>
      <h1>
        Painoindeksi laskuri!
      </h1>       
          Syötä paino:
          <p>
          <input  type="text" 
                  size={10} 
                  placeholder='KG' 
                  onChange={(e) => {
                    setPaino(parseInt(e.target.value))
                                    } 
          } />
        </p>
          Syötä pituus:
          <p>
          <input  type="text" 
                  size={10} 
                  placeholder='CM'
                  onChange={(e) => {
                    setPituus(parseFloat(e.target.value))
                                    } 
          } />

        </p>
        <button 
          onClick={TulostaPainoindeksi}>
            Laske painoindeksi!
        </button>
        <div 
          className={style}>
            {painoindeksi}
            <p>
              {vaara}
            </p> 
        </div>
    </main>
    
  );
}

export default App;
