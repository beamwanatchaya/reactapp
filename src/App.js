import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Welcome <code> to react </code> by wanatchaya
        </p>
        <a
          className="App-link"
          href="https://github.com/beamwanatchaya/reactapp.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          next page
        </a>
      </header>
    </div>
  );
}

export default App;
