import './App.css';
import Cabecalho from './components/cabecalho/cabecalho';
import CriandoBlocoDeConteudo from './components/blocodeconteudo/blocodeconteudo';

function App() {

  const primeirasection = 0;
  
  return (
    <div className="App">
        <Cabecalho/>
        <main>
          <CriandoBlocoDeConteudo
            sectionsolicitada={primeirasection}
          />
        </main>
    </div>
  );
}

export default App;
