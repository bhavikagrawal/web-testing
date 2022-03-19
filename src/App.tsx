import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Web Testing</p>
        <a
          className="App-link"
          href="https://create-react-app.dev/docs/running-tests/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Basic Testing for React
        </a>
      </header>
    </div>
  );
}

export default App;
