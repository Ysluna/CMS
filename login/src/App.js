import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./Logo.png' className='logo'></img>

        <div className='app-container'>
        <Login />

         </div>
      </header>
    </div>
  );
}

export default App;
