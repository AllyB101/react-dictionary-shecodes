import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">React Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small> Coded by Allende Bennett</small>{" "}
        </footer>
      </div>
    </div>
  );
}
