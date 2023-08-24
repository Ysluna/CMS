import './app.css';
import { Componente1 } from "./Components/componente1";
import { Componente2 } from "./Components/componente2";
import { Componente3 } from "./Components/componente3";
import { Componente4 } from "./Components/componente4";
import { Componente5 } from "./Components/componente5";
import { Componente6 } from "./Components/componente6";
import { Componente7 } from "./Components/componente7";

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <img src='../public/logo_csm.png' className="logo"></img>
  
      <div className="App-container">
        <Componente1 />
        <Componente2 />
        <Componente3 />
        <Componente4 />
        <Componente5 />
        <Componente6 />
        <Componente7 />

      </div>
      </header>
    </div>
  )
}

export default App;