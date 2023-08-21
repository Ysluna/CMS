import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { FourthComponent } from './components/FourthComponent';
import { FifthComponent } from './components/FifthComponent';
import { SixthComponent } from './components/SixthComponent';
import { SeventhComponent } from './components/SeventhComponent';
import { EighthComponent } from './components/EighthComponent';
import { NinthComponent } from './components/NinthComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./Logo.png' className='logo'></img>

        <div className='app-container'>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
        <SixthComponent />
        <SeventhComponent />
        <NinthComponent />
        <EighthComponent /> </div>
      </header>
    </div>
  );
}

export default App;
