import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">React Dictionary</header>
        <main>
          <Dictionary defaultKeyword={"panda"} />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://github.com/AllyB101/react-dictionary-shecodes"
            target="_blank"
            rel="noreferrer"
            alt="links"
          >
            Allende Bennett
          </a>{" "}
          and is open-sourced code on
          <a
            href="https://github.com/AllyB101/react-dictionary-shecodes"
            target="_blank"
            rel="noreferrer"
            alt="githublink"
          >
            {" "}
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
