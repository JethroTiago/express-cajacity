import './App.css';
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Trabalho from './Components/Trabalho';
import Depoimentos from './Components/Depoimentos';
import Contato from './Components/Contato';
import Rodape from './Components/Rodape';

function App() {
  return (
    <div className="App">
      <Home />
      <Sobre />
      <Trabalho />
      <Depoimentos />
      <Contato />
      <Rodape />
    </div>
  );
};

export default App;
