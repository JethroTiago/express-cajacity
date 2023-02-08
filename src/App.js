import './App.css';
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Trabalho from './Components/Trabalho';
import Depoimentos from './Components/Depoimentos';

function App() {
  return (
    <div className="App">
      <Home />
      <Sobre />
      <Trabalho />
      <Depoimentos />
    </div>
  );
}

export default App;
