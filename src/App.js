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
          This project was coded by{" "}
          <a
            href="https://github.com/AllyB101/react-dictionary-shecodes"
            target="_blank"
            rel="noreferrer"
          >
            Allende Bennett
          </a>{" "}
          and is open-sourced code on
        </footer>

        <a
          href="https://github.com/AllyB101/react-dictionary-shecodes"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Github
        </a>
      </div>
    </div>
  );
}
