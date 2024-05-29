import logo from "./logo.svg";
import "./App.css";

function Header(props: { title: string }) {
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">html</a>
        </li>
        <li>
          <a href="/read/3">html</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  );
}

function App() {
  return (
    <div>
      <Header title="상품"></Header>
      <img src="" alt="" />
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
