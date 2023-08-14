import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my website! I'm currently working on it, so please check back later for more content.
        </p>
        
        <p>
          For now, visit my LinkedIn or Google Developer Profile :D
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/angel-gama/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://developers.google.com/profile/u/Angel_Gama"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Developer Profile
        </a>
      </header>
    </div>
  );
}

export default App;
