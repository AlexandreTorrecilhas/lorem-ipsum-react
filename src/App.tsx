import './App.css';
import Cabecalho from './components/cabecalho/cabecalho';
import CriandoBlocoDeConteudo from './components/blocodeconteudo/blocodeconteudo';
import CriandoConteudoComImagemDeFundo from './components/blocodeconteudo/conteudoComImagemDeFundo/conteudoComImagemDeFundo';

function App() {

  const primeirasection = 0;
  const segundasection = 1;
  
  return (
    <div className="App">
        <Cabecalho/>
        <main>
          <CriandoBlocoDeConteudo
            sectionsolicitada={primeirasection}
          />
        </main>
        <CriandoConteudoComImagemDeFundo
          sectionsolicitada={segundasection}
        />
    </div>
  );
}

export default App;
