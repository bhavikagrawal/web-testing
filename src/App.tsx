import logo from "./logo.svg";
import "./App.css";

function App({ user }: { user?: { name?: string } }) {
  if (user) user.name = user.name ? "Hello, " + user.name : "";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {user?.name && <h2>{user.name}</h2>}
        <p>Welcome to Web Testing</p>
        <a
          className="App-link"
          href="https://create-react-app.dev/docs/running-tests/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Basic Testing for React
        </a>
      </header>
      <div>
        <button onClick={() => alert(`Hi ${user?.name ?? "Friend"}`)}>
          Say Hi
        </button>
      </div>
    </div>
  );
}

export default App;
